const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
const config = require('./config')[process.env.NODE_ENV]

const app = express()

const defaultRoutes = require('./routes')()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const allowedOrigins = ['http://localhost:4200']
app.use(cors({
  origin (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  credentials: true
}))

app.use('/api', defaultRoutes)
const bootstrap = async () => {
  app.listen(config.port, () => console.info(`Example app listening on port ${config.port}!`))
}
bootstrap()
