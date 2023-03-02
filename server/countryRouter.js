const express = require('express')

const country = require('./data/countryData.json')

const countryRouter = express.Router()

countryRouter.get('/2/-1', (req, res) => {
  res.redirect('/town/gate')
})

countryRouter.get('/:x/:y', (req, res) => {
  const x = Number(req.params.x)
  const y = Number(req.params.y)
  const place = country[y][x]
  res.render('country', { ...place, links: makeLinks(x, y) })
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
