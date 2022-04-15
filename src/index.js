const express = require('express')
const config = require('config')
const app = express()
const manufacturerRoute = require('./Routes/ManufacturerRoute')
const vehicleRoute = require('./Routes/VehicleRoute')

app.use(express.json())
app.use('/api/manufacturer', manufacturerRoute)
app.use('/api/vehicle', vehicleRoute)

app.listen(config.get('app.port'), () => {
  console.log(`Running`)
})