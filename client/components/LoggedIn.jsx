import { logOff } from 'authenticare/client/auth'
import { Anchor, Box, Header, Menu, Nav, ResponsiveContext } from 'grommet'
import { Home } from 'grommet-icons'
import React from 'react'
import { connect } from 'react-redux'
import { changeNavState, changePage } from '../actions'

function LoggedIn ({ dispatch, username }) {
  function logOffHandler () {
    logOff()
    dispatch(changePage('Home'))
    dispatch(changeNavState('Logged Off'))
  }

  return (
    <Header background="dark" pad="medium">
      <Box direction="row" align="center" gap="small" onClick={() => dispatch(changePage('Home'))} >
        <Home/>
      </Box>
      <Box direction="row" align="center" gap="small" onClick={() => dispatch(changePage('User'))} >
                Logged in as {username}
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Go Places"
              items={[
                { label: 'Log Off', onClick: () => logOffHandler() }
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor onClick={logOffHandler} label="Log Off" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}

function mapStateToProps (state) {
  return {
    username: state.createUser.username
  }
}

export default connect(mapStateToProps)(LoggedIn)
