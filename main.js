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

const authenticate = (req, res, next) => {
  if (req.body.user === "Kitty" && req.body.pw === "kat") {
    next()
  } else {
    res.redirect("/login")
  }
}

app.get("/login", (req, res) => {
  res.render("login")
})

app.use(authenticate)

app.post("/", (req, res) => {
  res.render("home", req.body)
})

app.listen(3000, (req, res) => {
  console.log("Here we go again")
})
