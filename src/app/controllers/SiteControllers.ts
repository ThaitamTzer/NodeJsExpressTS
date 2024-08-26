import { Request, Response, NextFunction } from 'express'
import { Course } from '../models/Course'
import { mongooseToArr } from '../../utils' // Corrected import

type ReqRes = {
  req: Request
  res: Response
  next?: NextFunction
}

class SiteControllers {
  async homepage({ req, res, next }: ReqRes) {
    Course.find({})
      .then((courses) =>
        res.render('home', { courses: mongooseToArr(courses) }),
      )
      .catch(next)
  }

  search({ req, res }: ReqRes) {
    res.render('search')
  }
}

export default new SiteControllers()
