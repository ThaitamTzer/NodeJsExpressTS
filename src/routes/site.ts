import express from 'express'
const router = express.Router()
import siteController from '../app/controllers/SiteControllers'

router.use('/', siteController.homepage)

module.exports = router
