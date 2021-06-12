
exports.up = function(knex) {
    return knex.schema.table('person', table =>{
      
        table.string('phone');
        
    }) 
};

exports.down = function(knex) {
    return knex.schema.table('person', table => {
        table.dropColumn('phone');
      })
};
