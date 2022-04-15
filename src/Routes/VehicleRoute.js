const router = require('express').Router()
const Vehicle = require('../Models/Vehicle')

router.get('/', async (req, res) => {
  const allVehicles = await Vehicle.list()
  res.json(allVehicles)
})

router.get('/:id', async (req, res) => {
  const currentVehicle = await Vehicle.getById(req.params?.id)
  res.json(currentVehicle)
})

router.post('/create', async (req, res) => {
  await Vehicle.create(req.body)
  res.status(201).end()
})

router.put('/update/:id', async (req, res) => {
  const vehicleUpdated = await Vehicle.change(req.params.id, req.body)
  res.status(200).json(vehicleUpdated)
})

router.delete('/delete/:id', async (req, res) => {
  Vehicle.remove(req.params?.id)
  res.status(204).end()
})

module.exports = router