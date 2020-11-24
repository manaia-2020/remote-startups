/* eslint-disable promise/always-return */
import { Box, Button, Heading, Image, Paragraph, Text } from 'grommet'
import { Add, Info } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { setEvents } from '../actions'
import { showAllEvents } from '../api/eventsApi'

export const Card = () => {
  const [listEvents, setListEvents] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    showAllEvents()
      .then((events) => {
        setListEvents(events)
        dispatch(setEvents(events))
      })
  }, [])

  return (
    <div className='container'>
      <div>
        {listEvents.map(event => (
          <>
            <Box align="center" justify="center" pad="small" background={{ 'image': "url('')" }} height="xlarge" flex fill="vertical" direction="row-responsive" wrap overflow="auto" round="medium" >
              <Box align="center" pad="small" background={{ '0': 'b', '1': 'r', '2': 'a', '3': 'n', '4': 'd', 'color': 'white', 'image': "url('')", 'position': 'bottom' }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ 'type': 'fadeIn', 'size': 'medium' }}>
                <Box align="start" justify="start" pad="small" direction="row" alignSelf="start" />
                <Box align="center" justify="center" pad="xsmall" margin="xsmall" animation="zoomIn" hoverIndicator border={{ 'style': 'outset' }} elevation="medium" gap="xsmall">

                  <Heading level="2" size="medium" margin="xsmall" textAlign="center" truncate={false}>
                    {event.name}
                  </Heading>
                  <Image src="/server/public/project.images/project_image_019.svg" opacity="strong" />
                  <Text weight="bold" textAlign="center" size="medium">
                  Dates: {event.date_start} - {event.date_ends}
                  </Text>
                  <Paragraph size="small" margin="medium" textAlign="center">
                    {event.description}
                  </Paragraph>

                  <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                    <Button label="Join" icon={<Add />} />
                    <Button label="Find Out More" icon={<Info />} hoverIndicator={false} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        ))}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    events: state.setEvents
  }
}
export default connect(mapStateToProps)(Card)
