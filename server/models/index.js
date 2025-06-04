const sequelize = require('../config/db');
const User    = require('./User');
const Task    = require('./Task');
const History = require('./History');

// Описуємо асоціації тут, після того як усі моделі імпортовано:
User.hasMany(History, { foreignKey: 'userId' });
Task.hasMany(History, { foreignKey: 'taskId' });
History.belongsTo(User, { foreignKey: 'userId' });
History.belongsTo(Task, { foreignKey: 'taskId' });

// Якщо потрібно, можна експортувати всі разом:
module.exports = {
  sequelize,
  User,
  Task,
  History
};
