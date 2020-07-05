
exports.up = function(knex) {
  return knex.schema.createTable('plan', function (table) {
      table.increments()

      table.string('tittle').notNullable()
      table.decimal('price').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('plan')
};
