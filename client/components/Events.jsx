import { Box, DataTable, Heading, Tab } from 'grommet'
import { Aggregate } from 'grommet-icons'
import React from 'react'
import { connect } from 'react-redux'
import { columns, getData } from '../helpers'

const Events = ({ events }) => {
  const DATA = getData(events)

  return (
    <Tab title="Events" icon={<Aggregate />}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Heading textAlign="center" color="control">
          Live Events
        </Heading>
        <DataTable
          columns={columns}
          data={DATA}
          resizeable
          pad="medium" />
      </Box>
    </Tab>
  )
}

function mapStateToProps (state) {
  return {
    events: state.setEvents
  }
}
export default connect(mapStateToProps)(Events)
