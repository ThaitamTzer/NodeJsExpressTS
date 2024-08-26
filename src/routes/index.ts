import { Express } from 'express'
const newsRoute = require('./news')
const siteRoute = require('./site')

function routes(app: Express) {
  app.use('/news', newsRoute)

  app.use('/', siteRoute)
}

module.exports = routes
