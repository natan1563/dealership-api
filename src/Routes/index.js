const express = require('express')
const app = express()

const manufacturerRoute = require('./Manufacturer/ManufacturerRoute')
const vehicleRoute = require('./Vehicle/VehicleRoute')
const clientRoute = require('./Client/ClientRoute')

app.use(express.json())
app.use('/manufacturer', manufacturerRoute)
app.use('/vehicle', vehicleRoute)
app.use('/client', clientRoute)

module.exports = app
