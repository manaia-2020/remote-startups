import request from 'supertest'
import server from '../server'

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn()
}))

test('POST api/v1/sendRegistrationEmail returns 401 if not logged in', () => {
  return request(server)
    .post('/api/v1/sendRegistrationEmail')
    .send({ email: 'test@mail.com' })
    .expect(401)
})

test('PATCH /auth returns 401 if not logged in', () => {
  return request(server)
    .patch('/api/v1/auth')
    .send({ firstName: 'test', lastName: 'jest' })
    .expect(401)
})

test('POST /auth returns 401 if not logged in', () => {
  return request(server).post('/api/v1/auth').expect(401)
})

test('PATCH /updateEmail returns 401 if not logged in', () => {
  return request(server)
    .patch('/api/v1/updateEmail')
    .send({ email: 'jest@mail.com' })
    .expect(401)
})
