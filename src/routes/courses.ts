import express from 'express'
const router = express.Router()
import coursesController from '../app/controllers/CourseControllers'

router.get('/trash', coursesController.trash)
router.get('/list', coursesController.list)
router.get('/create', coursesController.create)
router.post('/store', coursesController.store)
router.patch('/restore/:id', coursesController.restore)
router.delete('/force/:id', coursesController.forceDelete)
router.delete('/:id', coursesController.delete)
router.get('/:id/edit', coursesController.edit)
router.put('/:id', coursesController.update)
router.get('/:slug', coursesController.show)
router.get('/', coursesController.index)

module.exports = router
