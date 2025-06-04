const express = require('express');
const router = express.Router();
const { Task } = require('../models/Task');
const seedTasks = require('../seedData');

// ⚠️ У реальному проекті обмеж це auth/admin middleware
router.post('/seed', async (req, res) => {
  try {
    await Task.destroy({ where: {} }); // Очищення таблиці
    await Task.bulkCreate(seedTasks);
    res.status(201).json({ message: 'Базу даних успішно заповнено!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка при заповненні бази' });
  }
});

module.exports = router;
