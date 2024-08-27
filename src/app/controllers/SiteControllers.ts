import { Request, Response, NextFunction } from 'express'

type ReqRes = {
  req: Request
  res: Response
  next?: NextFunction
}

class SiteControllers {
  // async homepage({ req, res, next }: ReqRes) {
  //   Course.find({})
  //     .then((courses) =>
  //       res.render("home", { courses: mongooseToArr(courses) })
  //     )
  //     .catch(next);
  // }

  homepage({ req, res, next }: ReqRes) {
    res.render('home')
  }

  search({ req, res }: ReqRes) {
    res.render('search')
  }
}

export default new SiteControllers()
