const router = require('express').Router()
const Client = require('../../Models/Client')

router.get('/', (req, res) => {
  res.json(Client.list())
})

router.post('/create', async(req, res) => {
  try {
    const clientData = await Client.create(req.body)
    res.status(201).json(clientData)
  } catch (e) {
    console.log(e.message)
  }
})

module.exports = router