const router = require('express').Router()
const Manufacturer = require('../../Models/Manufacturer')

router.get('/', async (_, res) => {
  const allManufacuteres = await Manufacturer.list()
  res.json(allManufacuteres)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const manufacturer = await Manufacturer.getById(id)

  return res
    .status(200)
    .json(manufacturer)
})

router.post('/create', async (req, res) => {
  const { name, email, celphone } = req.body

  await Manufacturer.save({
    "name": name,
    "email": email,
    "celphone": celphone
  })

  res
    .status(201)
    .end()
})

router.put('/update/:id', async (req, res) => {
  const { name, email, celphone } = req.body
  const data = {
    "name": name,
    "email": email,
    "celphone": celphone
  }
  const updated = await Manufacturer.change(req.params.id, data)

  res.status(200).json(updated)
})

module.exports = router

