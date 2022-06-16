/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').insert([
    {recipe_id: 1, recipe_name: 'Scrambled Eggs', created_at: '2022-06-16 17:14:33'},
    {recipe_id: 2, recipe_name: 'Spaghetti', created_at: '2022-06-16 17:15:58'}
  ]);
};
