import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import env from '../config/env.js'

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, no token provided',
      })
    }

    const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(token, env.jwtSecret)

    // 🔥 FIX IS HERE — support both id and userId
    const userId = decoded.id || decoded.userId

    const user = await User.findById(userId).select('-password')

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
      })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token invalid or expired',
    })
  }
}

export default authMiddleware