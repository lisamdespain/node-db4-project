/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').insert([
    {step_id: 1, step_number: 1, step_instructions: 'Heat a small saucepan on medium and put butter in it.', recipe_id: 1},
    {step_id: 2, step_number: 2, step_instructions: 'When the butter is melted, crack 2 eggs in the pan and scramble them. Add cheese.', recipe_id: 1},
    {step_id: 3, step_number: 3, step_instructions: 'Cook until the eggs look dry on the edges, then flip.', recipe_id: 1},
    {step_id: 4, step_number: 4, step_instructions: 'It is done when both sides are cooked.', recipe_id: 1},

    {step_id: 5, step_number: 1, step_instructions: 'Cook the noodles on medium for 12 minutes.', recipe_id: 2},
    {step_id: 6, step_number: 2, step_instructions: 'Brown the meat in a saucepan over medium heat.', recipe_id: 2},
    {step_id: 7, step_number: 3, step_instructions: 'When the meat is done, add the spaghetti sauce to the pan, stir, and simmer for 10 minutes', recipe_id: 2},
    {step_id: 8, step_number: 4, step_instructions: 'Drain the pasta, put it on a plate, and cover it with sauce. Enjoy!', recipe_id: 2}
  ]);
};
