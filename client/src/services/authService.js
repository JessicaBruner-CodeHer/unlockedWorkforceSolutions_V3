import apiRequest from './api'

const TOKEN_KEY = 'uws_token'
const USER_KEY = 'uws_user'

export const authService = {
  async login(credentials) {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: credentials,
    })

    const token = response?.data?.token
    const user = response?.data?.user

    if (!token || !user) {
      throw new Error('Login response is missing required data')
    }

    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))

    return response.data
  },

  async getCurrentUser() {
    const response = await apiRequest('/auth/me')
    return response.data
  },

  getStoredUser() {
    const user = localStorage.getItem(USER_KEY)
    return user ? JSON.parse(user) : null
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  },

  isAuthenticated() {
    return Boolean(localStorage.getItem(TOKEN_KEY))
  },
}

export default authService