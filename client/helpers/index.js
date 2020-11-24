import { isAuthenticated } from 'authenticare/client/auth'
import { addUserInfo, changeNavState } from '../actions'
import { getUserInfo } from '../api'

export function controlNavState (dispatch) {
  if (isAuthenticated()) {
    dispatch(changeNavState('Logged In'))
    getUserInfo()
      .then((userInfo) =>
        dispatch(addUserInfo({ username: userInfo.username }))
      )
      .catch('an error occured dispatching username')
  } else dispatch(changeNavState('Logged Off'))
}

export const columns = [
  {
    header: 'Name',
    property: 'name',
    primary: true,
    sortable: true,
    search: true
  },
  { header: 'Dates', property: 'dates', sortable: true },
  { header: 'Topic', property: 'topic', sortable: true },
  { header: 'Description', property: 'description' }
]

export const getData = (arr) => {
  return arr.map((event) => ({
    name: event.name,
    dates: event.date_start + '-' + event.date_end,
    topic: event.topic,
    description: event.description
  }))
}

export const getImage = () => {
  let image = Math.floor(Math.random() * 51) + 1

  if (image < 10) image = '00' + image
  else if (image < 51 && image > 9) image = '0' + image
  else image = image.toString()
  return image
}

export const labelStyle = {
  display: 'block',
  fontWeight: '600',
  padding: '1rem'
}
