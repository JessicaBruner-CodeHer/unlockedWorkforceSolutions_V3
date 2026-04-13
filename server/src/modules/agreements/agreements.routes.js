import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Agreements route active.',
  })
})

export default router