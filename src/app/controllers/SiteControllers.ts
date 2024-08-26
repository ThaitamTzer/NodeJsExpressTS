import { Request, Response } from 'express'
import { Course } from '../models/Course'

type ReqRes = {
  req: Request
  res: Response
}

class SiteControllers {
  async homepage({ req, res }: ReqRes) {
    try {
      const courses = await Course.find({})
      res.json(courses)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  search({ req, res }: ReqRes) {
    res.render('search')
  }
}

export default new SiteControllers()
