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
    Course.findOne({ slug: req.params.slug }).then((course) => {
      if (course) {
        res.render('show-course', { course: mongooseToObj(course) })
      } else {
        res.status(404).send('Not found')
      }
    })
  }

  //[GET] /courses/create
  create(req: Request, res: Response) {
    res.render('create')
  }

  //[POST] /courses/store
  store(req: Request, res: Response) {
    const formData = req.body
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData)
    course.save().then(() => res.redirect('/courses'))
  }

  //[GET] /courses/list
  list(req: Request, res: Response) {
    Course.find({}).then((courses) =>
      res.render('courses/list', { courses: mongooseToArr(courses) }),
    )
  }

  //[GET] /courses/:id/edit
  edit(req: Request, res: Response) {
    Course.findById(req.params.id).then((course) => {
      if (course) {
        res.render('courses/edit', { course: mongooseToObj(course) })
      } else {
        res.status(404).send('Not found')
      }
    })
  }

  //[PUT] /courses/:id
  update(req: Request, res: Response) {
    Course.updateOne({ _id: req.params.id }, req.body).then(() =>
      res.redirect('/courses/list'),
    )
  }
}

export default new CoursesControllers()
