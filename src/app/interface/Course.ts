import { SoftDeleteDocument } from 'mongoose-delete'
interface ICourse extends SoftDeleteDocument {
  name: string
  description: string
  image: string
  videoId: string
  level: string
  slug: string
}

export default ICourse
