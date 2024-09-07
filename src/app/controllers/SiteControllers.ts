import { Request, Response, NextFunction } from 'express'

type ReqRes = {
  req: Request
  res: Response
  next?: NextFunction
}

class SiteControllers {
  homepage({ req, res, next }: ReqRes) {
    res.render('home')
  }

  search({ req, res }: ReqRes) {
    res.render('search')
  }
}

export default new SiteControllers()
