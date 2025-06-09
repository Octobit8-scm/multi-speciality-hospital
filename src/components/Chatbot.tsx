'use client'

import { useState, useRef, useEffect } from 'react'
import { FaComments, FaPhone, FaTimes, FaPaperPlane, FaSpinner, FaMicrophone, FaMicrophoneSlash, FaExclamationCircle } from 'react-icons/fa'
import { apiService } from '@/services/api'
import { API_CONFIG } from '@/config/api'

// Add Web Speech API type definitions
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

type MessageStatus = 'sending' | 'sent' | 'error'

interface Message {
  text: string
  isUser: boolean
  timestamp: number
  isVoice?: boolean
  status?: MessageStatus
}

type ChatRole = 'user' | 'assistant' | 'system'

interface ChatMessage {
  role: ChatRole
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hello! I'm multi-speciality-hospital's virtual assistant. How can I help you today?", 
      isUser: false,
      timestamp: Date.now(),
      status: 'sent'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCalling, setIsCalling] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputMessage(transcript)
        handleSendMessage(transcript)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }
    }

    // Add event listener for call end
    const handleCallEnd = () => {
      setMessages(prev => [...prev, { 
        text: "The call has ended. Is there anything else I can help you with?", 
        isUser: false,
        timestamp: Date.now(),
        status: 'sent'
      }])
    }

    window.addEventListener('vapi-call-ended', handleCallEnd)

    // Cleanup
    return () => {
      window.removeEventListener('vapi-call-ended', handleCallEnd)
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message = inputMessage) => {
    if (message.trim()) {
      const userMessage: Message = { 
        text: message, 
        isUser: true, 
        timestamp: Date.now(),
        isVoice: isVoiceEnabled,
        status: 'sending'
      }
      setMessages(prev => [...prev, userMessage])
      setInputMessage('')
      setIsLoading(true)
      setIsTyping(true)

      try {
        // Convert messages to OpenAI format
        const openAIMessages: ChatMessage[] = messages
          .filter(msg => msg.status === 'sent')
          .map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text
          }))
        openAIMessages.push({ role: 'user', content: message })

        const response = await apiService.getChatResponse(openAIMessages)
        
        // Update user message status
        setMessages(prev => prev.map(msg => 
          msg === userMessage ? { ...msg, status: 'sent' } : msg
        ))

        // Add assistant's response
        const assistantMessage: Message = { 
          text: response, 
          isUser: false,
          timestamp: Date.now(),
          isVoice: isVoiceEnabled,
          status: 'sent'
        }
        setMessages(prev => [...prev, assistantMessage])

        // Speak the response if voice is enabled
        if (isVoiceEnabled) {
          speakText(response)
        }
      } catch (error) {
        // Update user message status to error
        setMessages(prev => prev.map(msg => 
          msg === userMessage ? { ...msg, status: 'error' } : msg
        ))

        setMessages(prev => [...prev, { 
          text: "I apologize, but I'm having trouble connecting right now. Please try again later or call us directly.", 
          isUser: false,
          timestamp: Date.now(),
          status: 'sent'
        }])
      } finally {
        setIsLoading(false)
        setIsTyping(false)
      }
    }
  }

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      window.speechSynthesis.speak(utterance)
    }
  }

  const toggleVoiceInput = () => {
    if (!isListening && recognitionRef.current) {
      recognitionRef.current.start()
      setIsListening(true)
    } else if (isListening && recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const toggleVoiceMode = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled) {
      speakText("Voice mode enabled. You can now speak to me.")
    }
  }

  const handleCall = async () => {
    setIsCalling(true)
    try {
      const call = await apiService.initiateCall()
      if (call) {
        setMessages(prev => [...prev, { 
          text: "Call initiated successfully! Our team will connect with you shortly.", 
          isUser: false,
          timestamp: Date.now(),
          status: 'sent'
        }])
      } else {
        throw new Error('Call initiation failed')
      }
    } catch (error) {
      console.error('Call initiation error:', error)
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't initiate the call. Please try again later.", 
        isUser: false,
        timestamp: Date.now(),
        status: 'sent'
      }])
    } finally {
      setIsCalling(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value)
    
    // Show typing indicator
    setIsTyping(true)
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-semibold">Chat with multi-speciality-hospital</h3>
            <p className="text-sm text-blue-100">We're here to help!</p>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {message.text}
                    {message.isVoice && (
                      <span className="text-xs opacity-70">
                        {message.isUser ? '🎤' : '🔊'}
                      </span>
                    )}
                    {message.status === 'error' && (
                      <FaExclamationCircle className="text-red-500" />
                    )}
                  </div>
                  <div className="text-xs opacity-70 mt-1 flex items-center justify-between">
                    <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
                    {message.status === 'sending' && (
                      <FaSpinner className="animate-spin ml-2" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && !isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
              </button>
              <button
                onClick={toggleVoiceInput}
                disabled={isLoading}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isListening 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
              </button>
            </div>
            
            {/* Voice Mode Toggle */}
            <button
              onClick={toggleVoiceMode}
              className={`mt-2 w-full p-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                isVoiceEnabled 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <FaMicrophone className={isVoiceEnabled ? 'text-white' : 'text-gray-600'} />
              <span>{isVoiceEnabled ? 'Voice Mode On' : 'Voice Mode Off'}</span>
            </button>
            
            {/* Call Button */}
            <button
              onClick={handleCall}
              disabled={isCalling}
              className="mt-2 w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isCalling ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>
                  <FaPhone />
                  <span>Call Us Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 