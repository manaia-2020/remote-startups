/* eslint-disable promise/always-return */
import { isAuthenticated, signIn } from 'authenticare/client'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUserInfo, changeNavState, changePage } from '../actions'
import { getUserInfo } from '../api'
import { baseApiUrl as baseUrl } from '../config'
import { Form, FormField, TextInput, Button } from 'grommet'

function Login({ dispatch }) {
  const [user] = useState({
    username: '',
    password: ''
  })

  const usernameHandler = (event) => {
    event.preventDefault()
    user.username = event.target.value
  }

  const passwordHandler = (event) => {
    event.preventDefault()
    user.password = event.target.value
  }

  const submitHandler = event => {
    event.preventDefault()
    const { username, password } = user

    signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          dispatch(changePage('Home'))
          dispatch(changeNavState('Logged In'))
          return getUserInfo(username)
        }
      })
      .then(res => dispatch(addUserInfo({ username: res.username })))
      .catch(err => alert(err.message + ': Incorrect email or password, please try again'))
  }

  return (
    <Form onSubmit={submitHandler}>
      <FormField label='username' name='username'>
        <TextInput name='username' type='username' onChange={usernameHandler} />
      </FormField>
      <FormField label='password' name='password'>
        <TextInput name='password' type='password' onChange={passwordHandler} />
      </FormField>
      <Button type='submit' value='Submit' label='Submit' />
    </Form>
  )
}

export default connect()(Login)
