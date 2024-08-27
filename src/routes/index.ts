import { Express } from 'express'
const newsRoute = require('./news')
const siteRoute = require('./site')
const courseRoute = require('./courses')

function routes(app: Express) {
  app.use('/courses', courseRoute)
  app.use('/news', newsRoute)
  app.use('/', siteRoute)
}

module.exports = routes
