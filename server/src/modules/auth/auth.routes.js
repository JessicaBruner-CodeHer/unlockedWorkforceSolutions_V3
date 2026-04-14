import { Router } from 'express'
import {
  getAuthStatus,
  loginUser,
  getCurrentUser,
} from './auth.controller.js'

import authMiddleware from '../../middleware/authMiddleware.js'

const router = Router()

router.get('/status', getAuthStatus)
router.post('/login', loginUser)
router.get('/me', authMiddleware, getCurrentUser)

export default router