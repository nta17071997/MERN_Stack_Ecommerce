const express = require('express');
const router = express.Router();
const { authenticateJWT, isAuth, isAdmin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.get('/secret/:userId', authenticateJWT, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.param('userId', userById);

module.exports = router;
