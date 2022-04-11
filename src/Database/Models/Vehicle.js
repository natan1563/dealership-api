const {  DataTypes, Model, Deferrable } = require('sequelize')
const sequelize = require('../Dealership_db')
const Cliente = require('./Cliente')
const Manufacturer = require('./Manufacturer')

class Vehicle extends Model {}

Vehicle.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  year: {
    type: DataTypes.STRING(4),
    allowNull: false
  },

  model: {
    type: DataTypes.STRING(45),
    allowNull: false
  },

  detail: {
    type: DataTypes.TEXT
  },

  image: {
    type: DataTypes.STRING(255)
  },

  manufacturer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Manufacturer,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },

  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  sequelize,
  modelName: 'Vehicle',
  freezeTableName: true,
  tableName: 'vehicle',
  timestamps: false
})

module.exports = Vehicle