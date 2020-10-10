import nock from 'nock'
import { addNewEvent, showAllEvents } from './eventsApi'
const request = require('supertest')

test('fetches events from server', () => {
  nock(/localhost/)
    .get('/api/v1/events')
    .reply(200, {
      event_id: 1,
      name: 'Test Event',
      description: 'an event description',
    })

  return showAllEvents().then((res) => {
    expect(200)
    expect(res.event_id).toEqual(1)
    expect(res.name).toEqual('Test Event')
    return null
  })
})

describe('send a new event to the server', () => {
  const scope = nock(/localhost/)
    .post('/api/v1/events/1')
    .reply(201)
  test('post an event to the server', () => {
    return addNewEvent(1, 'an event', 'a description').then((result) => {
      expect(scope.isDone()).toBe(true)
    })
  })
})
