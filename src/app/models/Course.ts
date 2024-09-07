import ICourse from '../interface/Course'
import mongoose, { Schema } from 'mongoose'
const slug = require('mongoose-slug-updater')
import mongooseDelete, { SoftDeleteModel } from 'mongoose-delete'

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

mongoose.plugin(slug)
CourseSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
})

export const Course: SoftDeleteModel<ICourse> = mongoose.model<
  ICourse,
  SoftDeleteModel<ICourse>
>('Course', CourseSchema)
