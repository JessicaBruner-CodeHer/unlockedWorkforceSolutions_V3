import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Job postings route active.',
  })
})

export default router