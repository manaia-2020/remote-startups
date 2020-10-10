exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.integer('user_id')
    table.foreign('user_id').references('users.id')
    table.string('name')
    table.string('description')
    table.string('topic')
    table.string('date_start')
    table.string('date_end')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
