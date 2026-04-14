import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/User.js'
import env from '../../config/env.js'

export const authService = {
  async login(email, password) {
    const normalizedEmail = email.trim().toLowerCase()

    const user = await User.findOne({ email: normalizedEmail })

    if (!user) {
      throw new Error('Invalid email or password')
    }

    if (!user.isActive) {
      throw new Error('Account is inactive')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid email or password')
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      env.jwtSecret,
      { expiresIn: '7d' }
    )

    return {
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
      token,
    }
  },
}