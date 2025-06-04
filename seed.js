const { sequelize, User, Task, History } = require('./server/models');

(async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate([
      { username: 'oleksiy', email: 'oleksiy@example.com', password: 'hashedpassword1' },
      { username: 'anna', email: 'anna@example.com', password: 'hashedpassword2' }
    ]);

    const tasks = await Task.bulkCreate([
      { description: 'Зробити домашнє завдання', category: 'Навчання' },
      { description: 'Прогулятися в парку', category: 'Відпочинок' }
    ]);

    await History.bulkCreate([
      { userId: users[0].id, taskId: tasks[0].id, chosenAt: new Date() },
      { userId: users[1].id, taskId: tasks[1].id, chosenAt: new Date() }
    ]);

    console.log('Дані успішно додані до бази!');
    process.exit(0);
  } catch (err) {
    console.error('Помилка при наповненні бази:', err);
    process.exit(1);
  }
})();
