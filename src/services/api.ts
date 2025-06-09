import Vapi from '@vapi-ai/web'
import { API_CONFIG } from '@/config/api'

// Initialize VAPI client
const vapi = new Vapi(API_CONFIG.VAPI_API_KEY)

// Define message interface
interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

// System prompt for the assistant
const SYSTEM_PROMPT = `You are a helpful medical assistant for multi-speciality-hospital Hospital. 
Your role is to:
1. Provide accurate medical information
2. Help schedule appointments
3. Answer questions about our services
4. Guide patients through their healthcare journey

Guidelines:
- Always maintain patient confidentiality
- Be clear and concise in your responses
- If unsure, recommend consulting a healthcare professional
- Use simple, non-technical language when possible`

// API service object
export const apiService = {
  // Get chat response from OpenAI
  async getChatResponse(messages: ChatMessage[]) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error getting chat response:', error)
      throw error
    }
  },

  // Initiate a call using VAPI
  async initiateCall() {
    try {
      console.log('Initiating call with configuration:', {
        assistantId: API_CONFIG.VAPI_ASSISTANT_ID
      })

      // Start the call using the assistant ID
      const call = await vapi.start(API_CONFIG.VAPI_ASSISTANT_ID)

      // Log call status
      console.log('Call initiated successfully')

      // Add event listener for call end
      vapi.on('call-end', () => {
        console.log('Call has ended')
        // Dispatch a custom event that the chatbot can listen to
        window.dispatchEvent(new CustomEvent('vapi-call-ended'))
      })

      return call
    } catch (error) {
      console.error('Error initiating call:', error)
      throw error
    }
  }
} 