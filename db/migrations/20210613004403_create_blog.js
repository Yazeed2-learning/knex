
exports.up = function(knex) {
  return knex.schema.createTable('blogs', table=> {
      table.increments('id')
        table.string('title').notNullable().unique() 
        table.string('body').notNullable() 
  } )
};

exports.down = function(knex) {
    return knex.schema.dropTable('blogs');

};
