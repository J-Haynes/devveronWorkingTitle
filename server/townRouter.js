const express = require('express')

const townRouter = express.Router()

const townData = require('./data/townData.json')

townRouter.get('/:id', (req, res) => {
  const id = req.params.id
  const townName = townData.locations[id]
  console.log(townName)

  // res.send('You are in: ' + townName)
  res.render('townview', townName)
})

module.exports = townRouter
