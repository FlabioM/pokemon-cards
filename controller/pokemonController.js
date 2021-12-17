const {pokemonCard} = require('../models');
module.exports.viewAll = async function(req, res,){
    const pokemonCards = await pokemonCard.findAll();
    res.render('index', {pokemonCards});
}