import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import env from './config/env.js'

import authRoutes from './modules/auth/auth.routes.js'
import usersRoutes from './modules/users/users.routes.js'
import employersRoutes from './modules/employers/employers.routes.js'
import jobPostingsRoutes from './modules/jobPostings/jobPostings.routes.js'
import eventsRoutes from './modules/events/events.routes.js'
import agreementsRoutes from './modules/agreements/agreements.routes.js'
import documentsRoutes from './modules/documents/documents.routes.js'
import dashboardRoutes from './modules/dashboard/dashboard.routes.js'

import notFoundMiddleware from './middleware/notFoundMiddleware.js'
import errorMiddleware from './middleware/errorMiddleware.js'

const app = express()

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy.',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/employers', employersRoutes)
app.use('/api/job-postings', jobPostingsRoutes)
app.use('/api/events', eventsRoutes)
app.use('/api/agreements', agreementsRoutes)
app.use('/api/documents', documentsRoutes)
app.use('/api/dashboard', dashboardRoutes)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app