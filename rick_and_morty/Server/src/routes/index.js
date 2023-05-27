const express = require('express');
const getCharById = require('../Controllers/getCharById');
const login = require('../Controllers/login');
const postUser = require('../Controllers/postUser');
const postFav = require('../Controllers/postFav');
const deleteFav = require('../Controllers/deleteFav');
const router = express.Router();


router.post('/login',postUser);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);
router.get('/character/:id', getCharById);
router.get('/login',login);


module.exports = router;