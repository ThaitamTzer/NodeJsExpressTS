import mongoose from 'mongoose'

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/LearnNodeJS')
    console.log('Connected to DB')
  } catch (error) {
    console.error('Error connecting to DB', error)
  }
}

module.exports = { connect }
