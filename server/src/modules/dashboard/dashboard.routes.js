import { Router } from 'express'
import authMiddleware from '../../middleware/authMiddleware.js'

const router = Router()

router.get('/', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Dashboard data retrieved successfully.',
    data: {
      employers: 5,
      jobs: 12,
      events: 3,
    },
  })
})

export default router