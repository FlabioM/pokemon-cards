var express = require('express');
var router = express.Router();
const pokemonController = require('../controller/pokemonController');

router.get( '/', pokemonController.viewAll);

module.exports = router;
