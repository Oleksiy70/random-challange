const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Замість окремого імпорту кожної моделі — підключаємо індекс, де вже є асоціації:
const { sequelize } = require('./models'); 

const authRoutes  = require('./routes/authRoutes');
const taskRoutes  = require('./routes/taskRoutes');
const userRoutes  = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
(async () => {
  try {
    // Тут підхопить і моделі, і вже визначені асоціації з models/index.js
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Не вдалося запустити сервер:', err);
  }
})();
