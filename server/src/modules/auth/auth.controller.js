import asyncHandler from '../../utils/asyncHandler.js'
import { sendSuccess, sendError } from '../../utils/apiResponse.js'
import { authService } from './auth.service.js'

export const getAuthStatus = asyncHandler(async (req, res) => {
  return sendSuccess(res, { authenticated: false }, 'Auth module is active.')
})

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return sendError(res, 'Email and password are required', 400)
  }

  try {
    const result = await authService.login(email, password)

    return sendSuccess(res, result, 'Login successful')
  } catch (error) {
    return sendError(res, error.message, 401)
  }
})

export const getCurrentUser = asyncHandler(async (req, res) => {
  return sendSuccess(res, req.user, 'User retrieved successfully')
})