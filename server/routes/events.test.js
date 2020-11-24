import request from 'supertest'
import server from '../server'
import { saveNewEvent, getAllEvents } from '../Db/projectDb'

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn()
}))

jest.mock('../db')

jest.mock('../Db/projectDb', () => ({
  saveNewEvent: jest.fn(),
  getAllEvents: jest.fn()
}))

test('POST /api/v1/events/:id returns 401 if not logged in', () => {
  return request(server).post('/api/v1/events/:id').expect(401)
})

test('DELETE /api/v1/events return 401 if not logged in', () => {
  return request(server).delete('/api/v1/events').expect(401)
})

test.skip('POST /api/v1/events/:id', () => {
  saveNewEvent.mockImplementation(() =>
    Promise.resolve({
      name: 'an event',
      description: 'this is an event yo',
      topic: 'TECHNOLOGY',
      date_start: '20/11/20',
      date_end: '24/11/20'
    })
  )
  return getTestToken(server).then((token) => {
    return request(server)
      .post('/api/v1/events/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'an event',
        description: 'this is an event yo',
        topic: 'TECHNOLOGY',
        date_start: '20/11/20',
        date_end: '24/11/20',
        image: '012'
      })
      .expect(201)
      .then((res) => {
        console.log(res)
        expect(res.body.name).toBe('the Event')
        expect(res.body.description).toBe('this is an event yo')
      })
  })
})

test('GET /api/v1/events', () => {
  getAllEvents.mockImplementation(() =>
    Promise.resolve([
      { id: 1, name: 'event', description: 'the description', user_id: 2 },
      {
        id: 2,
        name: 'organise something',
        description: 'test something',
        user_id: 3
      }
    ])
  )
  return request(server)
    .get('/api/v1/events')
    .then((res) => {
      expect(res.statusCode).toBe(200)
      expect(res.body[0].name).toBe('event')
      expect(res.body[1].description).toBe('test something')
    })
})

function getTestToken (srv) {
  return request(srv)
    .post('/api/v1/auth/')
    .send({ username: 'jess', password: 'jess' })
    .then((res) => res.body.token)
}
