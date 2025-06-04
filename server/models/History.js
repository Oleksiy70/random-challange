const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const History = sequelize.define(
  'History',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chosenAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'Histories',  // якщо таблиця називається саме Histories
    timestamps: false        // <-- ВИМКНУЛИ createdAt/updatedAt
  }
);

module.exports = History;
