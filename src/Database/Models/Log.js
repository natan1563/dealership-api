const { Model, DataTypes } = require('sequelize')
const sequelize = require('../Dealership_db')

class Log extends Model {}

Log.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    error_id: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'Log',
    tableName: 'log',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)