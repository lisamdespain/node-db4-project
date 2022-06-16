/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').insert([
    {ingredient_id: 1, ingredient_name: 'eggs'},
    {ingredient_id: 2, ingredient_name: 'cheese'},
    {ingredient_id: 3, ingredient_name: 'butter'},
    {ingredient_id: 4, ingredient_name: 'noodles'},
    {ingredient_id: 5, ingredient_name: 'spaghetti sauce'},
    {ingredient_id: 6, ingredient_name: 'beef'}
  ]);
};
