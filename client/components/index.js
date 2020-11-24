import React from 'react'
import HomeComponent from './Home'
import NavComponent from './Nav'
import LoginComponent from './Login'
import RegisterComponent from './Register'
import UserTabsComponent from './UserTabs'

export function Home () {
  return <HomeComponent />
}

export function Login () {
  return <LoginComponent />
}

export function Register () {
  return <RegisterComponent />
}

export function Nav () {
  return <NavComponent />
}

export function UserTabs () {
  return <UserTabsComponent />
}
