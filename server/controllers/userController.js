// server/controllers/userController.js
// Беремо модель User з models/index.js (якщо вона тут потрібна)
const { User } = require('../models');

exports.getProfile = async (req, res) => {
  return res.json({ id: req.user.id, username: req.user.username });
};
