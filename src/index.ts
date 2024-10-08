import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { engine } from 'express-handlebars'
const methodOverride = require('method-override')
const db = require('./config/db')

const route = require('./routes')

// Connect to DB
db.connect()

const app = express()
const port = 3030

// logger
// app.use(morgan("combined"));

// static file
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

// timeplate engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a: number, b: number) => a + b,
    },
  }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resources/views'))

route(app)

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})
