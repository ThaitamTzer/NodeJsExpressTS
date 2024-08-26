import { Document } from 'mongoose'

export const mongooseToArr = (mongooseArray: Document[]) => {
  return mongooseArray.map((item) => item.toObject())
}

export const mongooseToObj = (mongooseObject: Document) => {
  return mongooseObject.toObject()
}
