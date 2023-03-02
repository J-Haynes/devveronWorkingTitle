const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const townData = require('../data/townData.json')

// const townRouter = require('./townRouter')
// const townRouter = require('./countryRouter') < --- assuming the names of these routers

// Server config

const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))

// Handlebars config

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

const testMessage = 'HELLO THERE!'

server.get('/', (req, res) => {
  res.render('home', townData)
})

server.get('/town', (req, res) => {
  res.render('townview', townData)
})

// Export !

module.exports = server
