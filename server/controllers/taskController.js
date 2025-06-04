// server/controllers/taskController.js

const { Task, History } = require('../models');
const axios = require('axios');
const https = require('https');
require('dotenv').config();

exports.getRandomTask = async (req, res) => {
  const { category } = req.query;
  try {
    const whereClause = category ? { category } : {};
    const count = await Task.count({ where: whereClause });
    if (count === 0) {
      return res.status(404).json({ message: 'Немає завдань у цій категорії' });
    }
    const randomIndex = Math.floor(Math.random() * count);
    const task = await Task.findOne({ where: whereClause, offset: randomIndex });
    await History.create({ userId: req.user.id, taskId: task.id });

    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    let quote = null;
    try {
      const response = await axios.get(process.env.QUOTABLE_API, { httpsAgent, timeout: 5000 });
      quote = response.data;
    } catch (err) {
      console.warn('Не вдалося завантажити цитату (ігноруємо помилку):', err.code || err.message);
    }

    return res.json({ task, quote });
  } catch (err) {
    console.error('Error in getRandomTask:', err);
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteHistoryItem = async (req, res) => {
  try {
    const id = req.params.id;

    // Знаходимо запис у таблиці History, що належить користувачу і має потрібний id
    const historyItem = await History.findOne({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!historyItem) {
      return res.status(404).json({ message: 'Запис не знайдено або ви не маєте доступу' });
    }

    await historyItem.destroy();

    return res.json({ message: 'Запис успішно видалено' });
  } catch (err) {
    console.error('Error in deleteHistoryItem:', err);
    return res.status(500).json({ error: err.message });
  }
};


exports.getHistory = async (req, res) => {
  try {
    const history = await History.findAll({
      where: { userId: req.user.id },
      include: [ Task ],
      order: [['chosenAt', 'DESC']],
    });
    return res.json({ history });
  } catch (err) {
    console.error('Error in getHistory:', err);
    return res.status(500).json({ error: err.message });
  }
};
