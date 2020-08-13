const express = require('express');
const router = express.Router();
const { authenticateJWT, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update } = require('../controllers/user');

router.get('/secret/:userId', authenticateJWT, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get('/user/:userId', authenticateJWT, isAuth, isAdmin, read )
router.put('/user/:userId', authenticateJWT, isAuth, isAdmin, update )

router.param('userId', userById);

module.exports = router;
