import { Request, Response } from 'express'
import { Course } from '../models/Course'
import { mongooseToArr, mongooseToObj } from '../../utils' // Corrected import

class CoursesControllers {
  //[GET] /courses
  index(req: Request, res: Response) {
    Course.find({}).then((courses) =>
      res.render('courses', { courses: mongooseToArr(courses) }),
    )
  }

  //[GET] /courses/:slug
  show(req: Request, res: Response) {
    // res.send("Course detail - " + req.params.slug);
    Course.findOne({ slug: req.params.slug }).then((course) => {
      if (course) {
        res.render('show-course', { course: mongooseToObj(course) })
      } else {
        res.status(404).send('Not found')
      }
    })
  }
}

export default new CoursesControllers()
