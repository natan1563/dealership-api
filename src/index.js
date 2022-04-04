const express = require('express')
const config = require('config')
const app = express()
const db = require('./Database/Dealership_db')

app.get('/', async(req, res, next) => {
  try {
    await db.authenticate();
    res.send('YES, YES!!! OH YEAH MY FRIEND \\o/')
  } catch (err) {
    res.send(err.message)
  }
})

app.listen(config.get('app.port'), () => {
  console.log(`Running`)
})