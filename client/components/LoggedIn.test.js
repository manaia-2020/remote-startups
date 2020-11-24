import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import LoggedIn from './LoggedIn'
import '@testing-library/jest-dom'

test('nav displays log off', () => {
  render(
    <Provider store={store}>
      <LoggedIn />
    </Provider>
  )
  const nav = screen.getByRole('navigation')

  expect(nav.innerHTML).toMatch(/Log Off/)
})

test('displays banner text', () => {
  render(
    <Provider store={store}>
      {' '}
      <LoggedIn />
    </Provider>
  )
  const element = screen.getByLabelText('Home')
  const banner = screen.getByRole('banner')

  expect(element).toBeInTheDocument()
  expect(banner.innerHTML).toMatch(/Logged in as/)
})
