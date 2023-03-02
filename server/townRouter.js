const express = require('express')

const townRouter = express.Router()

// const townData = require('../data/townData.json')

townRouter.get('/:id', (req, res) => {
  const currentTown = req.params.id
  res.send('current location' + currentTown)
})

module.exports = townRouter
