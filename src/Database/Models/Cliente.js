const { Model, DataTypes, Deferrable } = require('sequelize')
const sequelize = require('../Dealership_db')
const Address = require('./Address')

class Cliente extends Model {}

Cliente.init({
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
    allowNull: false,
    unique: true
  },

  person: {
    type: DataTypes.ENUM(['physic', 'legal']),
    allowNull: false,
    defaultValue: 'physic'
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
  freezeTableName: true,
  modelName: 'Cliente',
  tableName: 'cliente',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

module.exports = Cliente