const API_BASE_URL = 'http://localhost:5000/api'

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('uws_token')

  const config = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (config.body && typeof config.body !== 'string') {
    config.body = JSON.stringify(config.body)
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export default apiRequest