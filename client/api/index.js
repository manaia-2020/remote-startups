import { getEncodedToken } from 'authenticare/client'
import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

export function sendRegistrationEmail (email) {
  return request
    .post('/api/v1/sendRegistrationEmail')
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send({ email })
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function sendReminderEmail (email) {
  return request
    .post('/api/v1/sendReminderEmail')
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send({ email })
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function addNewUserInfo (info) {
  return request
    .patch('/api/v1/auth')
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(info)
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function getUserInfo () {
  return request
    .post('/api/v1/auth')
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function updateEmail (info) {
  return request
    .patch('/api/v1/updateEmail')
    .set(acceptJsonHeader)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(info)
    .then(res => res.body)
    .catch(err => console.log(err.message))
}
