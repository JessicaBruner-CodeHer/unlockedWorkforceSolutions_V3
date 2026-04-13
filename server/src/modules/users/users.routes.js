import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Users route active.',
  })
})

export default router