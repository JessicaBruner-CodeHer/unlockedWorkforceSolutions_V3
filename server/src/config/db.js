import mongoose from 'mongoose'
import env from './env.js'

const connectDatabase = async () => {
  if (!env.mongoUri) {
    throw new Error('MONGODB_URI is missing from environment variables.')
  }

  try {
    const connection = await mongoose.connect(env.mongoUri)

    console.log(`MongoDB connected: ${connection.connection.host}`)
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDatabase