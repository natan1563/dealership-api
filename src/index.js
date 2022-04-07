const express = require('express')
const config = require('config')
const app = express()
const bodyParser = require('body-parser')
const manufacturerRoute = require('./Routes/ManufacturerRoute')

app.use(express.json())
app.use('/api/manufacturer', manufacturerRoute)

app.listen(config.get('app.port'), () => {
  console.log(`Running`)
})