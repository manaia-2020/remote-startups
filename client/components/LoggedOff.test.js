import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import LoggedOff from './LoggedOff'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

test('nav displays log in and register', () => {
  render(
    <Provider store={store}>
      <LoggedOff />
    </Provider>
  )
  const nav = screen.getByRole('navigation')

  expect(nav.innerHTML).toMatch(/Log In/)
  expect(nav.innerHTML).toMatch(/Register/)
})

test('displays banner text', () => {
  render(
    <Provider store={store}>
      {' '}
      <LoggedOff />
    </Provider>
  )
  const icon = screen.getByLabelText('Home')

  expect(icon).toBeInTheDocument()
})
