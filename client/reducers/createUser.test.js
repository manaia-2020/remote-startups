import { addUserInfo } from '../actions'
import createUser from './createUser'
test('initial state should be empty', () => {
  const state = createUser(undefined, { id: '', username: '' })
  expect(state.id).toBe('')
})

test('returns userInfo', () => {
  const user = { username: 'bobBuilder' }
  const action = addUserInfo(user)

  const newState = createUser([], action)

  expect(newState).toEqual(user)
})
