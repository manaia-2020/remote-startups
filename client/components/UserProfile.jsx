import { Box, Button, Form, FormField, Image, Tab, TextInput } from 'grommet'
import { User } from 'grommet-icons'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { addUserInfo, changePage } from '../actions'
import { getUserInfo, updateEmail } from '../api'
import { labelStyle } from '../helpers'

function UserProfile ({ dispatch, user }) {
  useEffect(() => {
    getUserInfo()
      .then(userInfo => {
        dispatch(addUserInfo(userInfo))
      })
  }, [])

  const { handleSubmit, control, errors } = useForm({
    // resolver: yupResolver(schema)
  })

  const onSubmit = values => {
    values.username = user.username
    updateEmail(values)
      .then(() => getUserInfo())
      .then(userInfo => {
        dispatch(addUserInfo(userInfo))
        alert('saved!')
        dispatch(changePage('Home'))
      })
  }

  return (
    <Tab title="Profile" icon={<User />} plain={false} reverse={false}>
      <Box align="center" justify="center" pad="xlarge">
        <Form pad="medium" onSubmit={handleSubmit(onSubmit)}>
          <FormField label="">
            <Image src={`avatar.images/gee_me_${user.image}.svg`} width={400} height={200} mode='fit' />
          </FormField>
          <h3>{user.firstName} {user.lastName}</h3>
          <label style={labelStyle} htmlFor="email">Update email: </label>
          <Controller as={TextInput} id="email" name="email" control={control} defaultValue="" placeholder={user.email} />

          <Button type='submit' value='Submit' label='Submit' />
        </Form >
      </Box>
    </Tab>
  )
}

function mapStateToProps (state) {
  return {
    user: state.createUser
  }
}

export default connect(mapStateToProps)(UserProfile)
