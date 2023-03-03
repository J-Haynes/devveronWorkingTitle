const express = require('express')

const townRouter = express.Router()

const townData = require('./data/townData.json')

townRouter.get('/:loc', (req, res) => {
  const loc = req.params.loc
  const location = townData[loc]
  console.log(location)

  // res.send('You are in: ' + location)
  res.render('townview', location)
})

module.exports = townRouter
