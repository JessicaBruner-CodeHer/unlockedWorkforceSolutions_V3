import asyncHandler from '../../utils/asyncHandler.js'
import { sendSuccess } from '../../utils/apiResponse.js'

export const getAuthStatus = asyncHandler(async (req, res) => {
  return sendSuccess(res, { authenticated: false }, 'Auth module is active.')
})