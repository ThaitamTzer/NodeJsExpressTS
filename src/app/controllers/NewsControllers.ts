import { Request, Response } from "express";

type ReqRes = {
  req: Request;
  res: Response;
};

class NewsControllers {
  news({ req, res }: ReqRes) {
    res.render("news");
  }

  detailnews({ req, res }: ReqRes) {
    res.send("detailnews");
  }
}

export default new NewsControllers();
