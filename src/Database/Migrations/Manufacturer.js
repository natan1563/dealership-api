const { Model, DataTypes } = require('sequelize')
const sequelize = require('../Dealership_db')

class Manufacturer extends Model {}

Manufacturer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true
  },

  celphone: {
    type: DataTypes.STRING(16),
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  modelName: "Manufacturer",
  tableName: "manufacturer"
})

module.exports = Manufacturer