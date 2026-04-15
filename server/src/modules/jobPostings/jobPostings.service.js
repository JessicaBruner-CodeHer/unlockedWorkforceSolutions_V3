import JobPosting from '../../models/JobPosting.js'

export const createJobPosting = async (data, userId) => {
  const job = await JobPosting.create({
    ...data,
    createdBy: userId,
  })

  return job
}

export const getJobPostings = async () => {
  return await JobPosting.find().sort({ createdAt: -1 })
}