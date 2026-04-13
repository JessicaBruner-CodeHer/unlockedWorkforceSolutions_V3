export const sendSuccess = (res, data = null, message = 'Request successful', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  })
}

export const sendError = (res, message = 'Request failed', statusCode = 500, errors = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  })
}