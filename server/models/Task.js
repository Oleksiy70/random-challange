// server/models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Tasks',   // точно вказуємо ім’я таблиці в БД
    timestamps: false     // <—- відключає createdAt / updatedAt
  }
);

module.exports = Task;
