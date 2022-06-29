
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl=>{
      tbl.increments('recipe_id');
      tbl.varchar('recipe_name', 128).unique().notNullable();
      tbl.dateTime('created_at').notNullable();
    })
    .createTable('ingredients', tbl =>{
      tbl.increments('ingredient_id');
      tbl.varchar('ingredient_name', 128).unique().notNullable();
    })
    .createTable('steps', tbl =>{
      tbl.increments('step_id');
      tbl.integer('step_number').notNullable();
      tbl.varchar('step_instructions', 256).notNullable();
      tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipe_id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
    })
    .createTable('step-ingredients', tbl =>{
      tbl.integer('step_id')
          .unsigned()
          .notNullable()
          .references('step_id')
          .inTable('steps')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredient_id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      tbl.varchar('quantity', 128).notNullable();
      tbl.primary(['step_id', 'ingredient_id'])
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('step-ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };
  