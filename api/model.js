const db = require('../data/db-config');

 async function getById(id){
    const results = await db('recipes as r').join('steps as s', 'r.recipe_id', 's.recipe_id').leftJoin('step-ingredients as si', 's.step_id', 'si.step_id').leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id').where('r.recipe_id', id).orderBy('s.step_number');
    if (results.length == 0){
        return null;
    }
    const recipe ={
        recipe_id: results[0].recipe_id,
        recipe_name: results[0].recipe_name,
        created_at: results[0].created_at,
        steps: results.map(step => ({step_id: step.step_id, step_number: step.step_number,
            step_instructions: step.step_instructions, ingredients: results.map(i => ({ingredient_id: i.ingredient_id, ingredient_name: i.ingredient_name, quantity: i.quantity}))})),
        
    }
    return recipe;
}
function get(){
    return db('recipes');
}

module.exports = {
    get, 
    getById
}