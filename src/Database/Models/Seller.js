const { Model, DataTypes, Deferrable } = require('sequelize')
const sequelize = require('../Dealership_db')
const Address = require('./Address')

class Seller extends Model {}

Seller.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  celphone: {
    type: DataTypes.STRING(16),
    allowNull: false,
    unique: true
  },
  rg: {
    type: DataTypes.STRING(13),
    allowNull: false
  },
  cpf_cnpj: {
    type: DataTypes.STRING(18),
    allowNull: true,
    unique: true
  },
  person: {
    type: DataTypes.ENUM(['physic', 'legal']),
    allowNull: false,
    defaultValue: 'physic'
  },
  partner: {
    type: DataTypes.ENUM(['Y', 'N']),
    allowNull: false,
    defaultValue: 'N'
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Address,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  modelName: "Seller",
  tableName: "seller"
})

module.exports = Seller