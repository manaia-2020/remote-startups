const knex = require('knex')
const config = require('../../knexfile').development
const connection = knex(config)

function saveNewEvent (id, event, db = connection) {
  const { name, description, startDate, endDate, topic } = event
  return db('projects')
    .insert({ user_id: id, name, description, date_start: startDate, date_end: endDate, topic })
}

function getAllEvents (db = connection) {
  return db('projects')
    .select()
}

function deleteEvent (id, db = connection) {
  return db('projects').where({ id }).delete()
}

function addUserToEvent (userId, eventId, db = connection) {
  return db('users_projects')
    .insert({ project_id: eventId, user_id: userId })
}

function getUsersForEvent ({ eventId, db = connection }) {
  return db('users_projects')
    .where('event_id', eventId)
    .select('users_id')
}

module.exports = {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent

}
