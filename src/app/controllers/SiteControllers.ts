import { Request, Response } from 'express'

type ReqRes = {
  req: Request
  res: Response
}

class SiteControllers {
  homepage({ req, res }: ReqRes) {
    res.render('home')
  }

  search({ req, res }: ReqRes) {
    res.render('search')
  }
}

export default new SiteControllers()
