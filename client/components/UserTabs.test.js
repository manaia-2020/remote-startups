import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import UserTabs from './UserTabs'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('renders tabs', () => {
  render(
    <Provider store={store}>
      <UserTabs />
    </Provider>
  )
  const tabs = screen.getAllByRole('tab')

  expect(tabs[0].innerHTML).toMatch('Profile')
  expect(tabs[1].innerHTML).toMatch('Events')
  expect(tabs[2].innerHTML).toMatch('Create Project')
})
