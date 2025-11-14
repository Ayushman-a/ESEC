// API Configuration for PHP Backend
// Update this with your production API URL when deploying
export const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost/api'

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact.php`,
  PRICING_PROPOSAL: `${API_BASE_URL}/pricing-proposal.php`,
  PARTNER_REQUEST: `${API_BASE_URL}/partner-request.php`
}

// Helper function to send form data to PHP API
export const sendFormData = async (endpoint: string, data: any) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form')
    }

    return result
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
