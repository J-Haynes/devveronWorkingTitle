const express = require('express')

const country = require('./data/countryData.json')

const countryRouter = express.Router()

countryRouter.get('/:x/:y', (req, res) => {
  const { x, y } = req.params
  const place = country[+y][+x]
  console.log(place)
  res.render('country', { ...place, links: makeLinks(+x, +y) })
})

module.exports = countryRouter

function makeLinks(x, y) {
  return {
    north: `/${x}/${y - 1}`,
    south: `/${x}/${y + 1}`,
    east: `/${x + 1}/${y}`,
    west: `/${x - 1}/${y}`,
  }
}
