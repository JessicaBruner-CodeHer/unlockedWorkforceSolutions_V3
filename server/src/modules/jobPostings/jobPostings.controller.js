import { createJobPosting, getJobPostings } from './jobPostings.service.js'

export const createJob = async (req, res) => {
  try {
    const job = await createJobPosting(req.body, req.user._id)

    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: job,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const getJobs = async (req, res) => {
  try {
    const jobs = await getJobPostings()

    res.status(200).json({
      success: true,
      data: jobs,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}