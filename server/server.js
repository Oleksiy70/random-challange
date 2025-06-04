const express = require('express');
const cors = require('cors');

require('dotenv').config();

const sequelize = require('./config/db');  // Ось так імпортуємо

const authRoutes  = require('./routes/authRoutes');
const taskRoutes  = require('./routes/taskRoutes');
const userRoutes  = require('./routes/userRoutes');
const { Task } = require('./models');
const adminRoutes = require('./routes/admin');



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Не вдалося запустити сервер:', err);
  }
})();

(async () => {
  const tasks = await Task.findAll({ limit: 10 });
  console.log(tasks.map(t => t.toJSON()));
})();