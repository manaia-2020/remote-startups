/* eslint-disable promise/always-return */
import { isAuthenticated, signIn } from 'authenticare/client'
import { Box, Button, Form, TextInput } from 'grommet'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUserInfo, changeNavState, changePage } from '../actions'
import { getUserInfo } from '../api'
import { baseApiUrl as baseUrl } from '../config'
import { labelStyle } from '../helpers'

function Login () {
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm({
    // resolver: yupResolver(schema)
  })

  const onSubmit = values => {
    const { username, password } = values
    signIn({ username, password }, { baseUrl })
      .then(token => {
        if (isAuthenticated()) {
          dispatch(changePage('User'))
          dispatch(changeNavState('Logged In'))
          return getUserInfo()
        } else alert('incorrect email or password')
      })
      .then(userInfo => dispatch(addUserInfo({ username: userInfo.username })))
      .catch(err => console.log(err.message))
  }

  return (
    <Box align='center' pad='large' >
      <Form pad="small" onSubmit={handleSubmit(onSubmit)}>
        <label style={labelStyle} htmlFor='username'>Username </label>
        <Controller as={TextInput} control={control} id='username' name='username' defaultValue="" type='text' />

        <label style={labelStyle} htmlFor='password'>Password</label>
        <Controller as={TextInput} control={control} id='password' name='password' defaultValue="" type='password' />

        <Button type='submit' value='Submit' label='Submit' />
      </Form>
    </Box>
  )
}

export default Login
