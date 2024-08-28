import express from 'express'
const router = express.Router()
import coursesController from '../app/controllers/CourseControllers'

router.get('/create', coursesController.create)
router.post('/store', coursesController.store)
router.get('/:slug', coursesController.show)
router.get('/', coursesController.index)

module.exports = router
