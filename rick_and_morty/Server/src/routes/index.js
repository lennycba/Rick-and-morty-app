const express = require('express');
const getCharById = require('../Controllers/getCharById');
const login = require('../Controllers/login');
const {postFav,deleteFav} = require('../Controllers/handleFavorites');
const router = express.Router();


router.get('/character/:id', getCharById);
router.get('/login',login);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);

module.exports = router;