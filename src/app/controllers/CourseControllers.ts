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
    Promise.all([
      Course.find(),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ]).then(([courses, deletedCount]) => {
      res.render('courses/list', {
        deletedCount,
        courses: mongooseToArr(courses),
      })
    })
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

  //[DELETE] /courses/:id
  delete(req: Request, res: Response) {
    Course.delete({ _id: req.params.id }).then(() => {
      res.redirect('back')
      res.json()
    })
  }

  //[DELETE] /courses/force/:id
  forceDelete(req: Request, res: Response) {
    Course.deleteOne({ _id: req.params.id }).then(() => res.redirect('back'))
  }

  // [PATCH] /courses/:id/restore
  restore(req: Request, res: Response) {
    Course.restore({ _id: req.params.id }).then(() => res.redirect('back'))
  }

  //[GET] /courses/trash
  trash(req: Request, res: Response) {
    Course.findWithDeleted({
      deleted: true,
    }).then((courses) =>
      res.render('courses/trash', { courses: mongooseToArr(courses) }),
    )
  }
}

export default new CoursesControllers()
