const { Model, DataTypes } = require('sequelize')
const sequelize = require('../Dealership_db')

class Address extends Model {}

Address.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  district: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  street:{
    type: DataTypes.STRING(120),
    allowNull: false
  },
  number: {
    type: DataTypes.STRING(12),
    defaultValue: 'S/N'
  },
  zipcode: {
    type: DataTypes.STRING(9),
    allowNull: false
  }
}, {
  sequelize,
  freezeTableName: true,
  modelName: 'Address',
  tableName: 'address',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

module.exports = Address