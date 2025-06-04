// server/routes/taskRoutes.js
const router = require('express').Router();
const auth = require('../middleware/auth');
const { getRandomTask, getHistory } = require('../controllers/taskController');
const { deleteHistoryItem } = require('../controllers/taskController'); // Імпорт функції видалення




// Перевірте, що саме ця назва функцій експортується з taskController.js
router.get('/random', auth, getRandomTask);
router.get('/history', auth, getHistory);
router.delete('/history/:id', auth, deleteHistoryItem);

module.exports = router;
