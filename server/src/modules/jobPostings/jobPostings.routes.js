import { Router } from 'express'
import authMiddleware from '../../middleware/authMiddleware.js'
import { createJob, getJobs } from './jobPostings.controller.js'
import { validateCreateJob } from './jobPostings.validation.js'

const router = Router()

router.post('/', authMiddleware, validateCreateJob, createJob)
router.get('/', authMiddleware, getJobs)

export default router