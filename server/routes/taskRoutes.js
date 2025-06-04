const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getRandomTask, getHistory, deleteHistoryItem } = require('../controllers/taskController');

router.get('/random', auth, getRandomTask);
router.get('/history', auth, getHistory);
router.delete('/history/:id', auth, deleteHistoryItem);

module.exports = router;
