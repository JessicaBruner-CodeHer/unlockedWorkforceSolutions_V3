export const validateCreateJob = (req, res, next) => {
  const { title, company, location, description } = req.body

  if (!title || !company || !location || !description) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    })
  }

  if (title.length < 3) {
    return res.status(400).json({
      success: false,
      message: 'Job title must be at least 3 characters',
    })
  }

  if (description.length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Description must be at least 10 characters',
    })
  }

  next()
}