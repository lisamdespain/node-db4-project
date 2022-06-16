/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step-ingredients').insert([
    {step_id: 1, ingredient_id: '3', quantity: '1 tsp'},
    {step_id: 2, ingredient_id: '1', quantity: '2'}, 
    {step_id: 2, ingredient_id: '2', quantity: '1/4 cup'},

    {step_id: 1, ingredient_id: '4', quantity: '12 oz'},
    {step_id: 2, ingredient_id: '6', quantity: '1 pound'},
    {step_id: 3, ingredient_id: '5', quantity: '28 oz jar'}
  ]);
};





