const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const expressSession = require('express-session')

const app = express()

app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(expressValidator())

app.use(
  expressSession({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true
  })
)

app.get("/", (req, resp, next) {
  
})
