/* eslint-disable */
import { getEncodedToken } from 'authenticare/client'
import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

export function addNewEvent(id, event) {
  return request
    .post('/api/v1/events/' + id)
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(event)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllEvents() {
  return request
    .get('/api/v1/events')
    .set(acceptJsonHeader)
    .then((res) => res.body)
    .catch((error) => console.log(error))

}
