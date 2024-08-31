import express from 'express'
const router = express.Router()
import coursesController from '../app/controllers/CourseControllers'

router.get('/list', coursesController.list)
router.get('/create', coursesController.create)
router.post('/store', coursesController.store)
router.delete('/:id', coursesController.delete)
router.get('/:id/edit', coursesController.edit)
router.put('/:id', coursesController.update)
router.get('/:slug', coursesController.show)
router.get('/', coursesController.index)

module.exports = router
