const express = require('express')
const config = require('config')
const app = express()
const routes = require('./Routes/index')

app.use('/api', routes)

app.listen(config.get('app.port'), () => {
  console.log(`Running`)
})