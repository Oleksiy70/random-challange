// server/routes/userRoutes.js
const router = require('express').Router();
const auth = require('../middleware/auth');
const { getProfile } = require('../controllers/userController');

router.get('/profile', auth, getProfile);

module.exports = router;