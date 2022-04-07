const router = require('express').Router()
const Manufacturer = require('../Models/Manufacturer')

router.get('/', async (req, res, next) => {
  const allManufacuteres = await Manufacturer.list()
  res.json(allManufacuteres)
})

router.post('/create', async (req, res, next) => {
  const { name, email, celphone } = req.body

  await Manufacturer.save({
    "name": name,
    "email": email,
    "celphone": celphone
  })

  res.status(201).end()
  next()
})

module.exports = router

