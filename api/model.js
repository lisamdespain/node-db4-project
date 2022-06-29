const db = require('../data/db-config');

 async function getById(id){
    const results = await db('recipes as r').join('steps as s', 'r.recipe_id', 's.recipe_id').leftJoin('step-ingredients as si', 's.step_id', 'si.step_id').leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id').where('r.recipe_id', id).orderBy('s.step_number').select('r.recipe_id', 'r.recipe_name', 'r.created_at', 's.step_id', 's.step_number', 's.step_instructions', 'i.ingredient_id', 'i.ingredient_name', 'si.quantity');
    if (results.length == 0){
        return null;
    }
    const recipe ={
        recipe_id: results[0].recipe_id,
        recipe_name: results[0].recipe_name,
        created_at: results[0].created_at,
        steps: results.reduce((acc, row) =>{
            if (!row.ingredient_id){
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions
                })
            } else if(row.ingredient_id && !acc.find(step => step.step_id === row.step_id)){
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions,
                    ingredients: [{
                        ingredient_id: row.ingredient_id,
                        ingredient_name: row.ingredient_name,
                        quantity: row.quantity
                    }]
                })
            } 
                const currentStep = acc.find(step => step.step_id === row.step_id)
                currentStep.ingredients.push({
                    ingredient_id: row.ingredient_id,
                    ingredient_name: row.ingredient_name,
                    quantity: row.quantity
                })
           
            return acc
        }, []),
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