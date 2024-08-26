import express from 'express'
const router = express.Router()
import newsController from '../app/controllers/NewsControllers'

router.use('/:slug', newsController.detailnews)
router.use('/', newsController.news)

module.exports = router
