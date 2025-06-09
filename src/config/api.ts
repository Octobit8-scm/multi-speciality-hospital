// Validate required environment variables
const validateConfig = () => {
  const requiredVars = {
    'NEXT_PUBLIC_OPENAI_API_KEY': process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    'NEXT_PUBLIC_VAPI_API_KEY': process.env.NEXT_PUBLIC_VAPI_API_KEY,
    'NEXT_PUBLIC_VAPI_ASSISTANT_ID': process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID,
  }

  const missingVars = Object.entries(requiredVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars)
  } else {
    console.log('Environment variables loaded successfully')
  }

  // Log API key formats (first 4 chars only for security)
  const openaiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  const vapiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY

  if (openaiKey) {
    console.log('OpenAI API Key format check:', {
      startsWithSk: openaiKey.startsWith('sk-'),
      length: openaiKey.length,
      prefix: openaiKey.substring(0, 4)
    })
  }

  if (vapiKey) {
    console.log('VAPI Key format check:', {
      length: vapiKey.length,
      prefix: vapiKey.substring(0, 4)
    })
  }
}

// Run validation
validateConfig()

export const API_CONFIG = {
  OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
  OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
  OPENAI_TEMPERATURE: 0.7,
  OPENAI_MAX_TOKENS: 1000,
  VAPI_API_KEY: process.env.NEXT_PUBLIC_VAPI_API_KEY || '',
  VAPI_PHONE_NUMBER: process.env.NEXT_PUBLIC_VAPI_PHONE_NUMBER || '+919876543210',
  VAPI_ASSISTANT_ID: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '79f3XXXX-XXXX-XXXX-XXXX-XXXXXXXXce48',
} 