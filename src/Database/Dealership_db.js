const Sequelize = require('sequelize')
const config = require('config')

module.exports = new Sequelize(
  config.get('db.name'),
  config.get('db.user'),
  config.get('db.pass'),
  {
    host: config.get('db.host'),
    dialect: config.get('db.sgbd')
  }
)

