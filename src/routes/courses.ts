import express from 'express'
const router = express.Router()
import coursesController from '../app/controllers/CourseControllers'

router.get('/:slug', coursesController.show)
router.get('/', coursesController.index)

module.exports = router
