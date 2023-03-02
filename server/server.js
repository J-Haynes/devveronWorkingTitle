const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const townData = require('../data/townData.json')

// const townRouter = require('./townRouter')
const countryRouter = require('./countryRouter')

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

<<<<<<< HEAD
server.get('/town', (req, res) => {
  res.render('townview', townData)
})
=======
server.use('/country', countryRouter)
>>>>>>> 434b469fe7100ac1fc9bb6dfbf284bf34919d5c7

// Export !

module.exports = server
