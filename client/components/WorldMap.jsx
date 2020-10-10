import { Box, Heading, Stack, WorldMap } from 'grommet'
import React from 'react'

function Map () {
  return (
    <Stack anchor='bottom' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
      <Box fill justify="center" >
        <WorldMap align='center' color='dark' opacity="0.8" />
      </Box>
      <Box fill align="center" justify="center" pad='medium' >
        <Heading color='accent-1' size="large">Co-ject!</Heading>
        <Heading size="small" color='accent-1'>An online collaboration space</Heading>
      </Box>

    </Stack>)
}

export default Map
