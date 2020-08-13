const express = require('express');
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  litsRelated,
  listCategories,
  listbySearch,
  photo,
} = require('../controllers/product');
const { authenticateJWT, isAuth, isAdmin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.get('/product/:productId', read);

router.post(
  '/product/create/:userId',
  authenticateJWT,
  isAuth,
  isAdmin,
  create
);
router.delete(
  '/product/:productId/:userId',
  authenticateJWT,
  isAuth,
  isAdmin,
  remove
);

router.put(
  '/product/:productId/:userId',
  authenticateJWT,
  isAuth,
  isAdmin,
  update
);

router.get('/products', list);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listbySearch);
router.get('/products/photo/:productId', photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
