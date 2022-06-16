const db = require('../data/db-config');

function getById(id){
    console.log('getById reached')
    // return db('recipes').where('recipe_id', id)
}

module.exports = getById;