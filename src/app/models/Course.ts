import ICourse from '../interface/Course'
import mongoose, { Schema } from 'mongoose'

const CourseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    descreption: { type: String, required: true },
    image: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
)

export const Course = mongoose.model<ICourse>('Course', CourseSchema)
