import ICourse from '../interface/Course'
import mongoose, { Schema } from 'mongoose'
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const CourseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 255 },
    level: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
)

export const Course = mongoose.model<ICourse>('Course', CourseSchema)
