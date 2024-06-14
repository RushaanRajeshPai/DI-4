import React from 'react'
import Box from './AboutComponents/Box/Box'
import OurTeam from './AboutComponents/OurTeam/OurTeam'
import Success from './AboutComponents/Success/Success'
import Serve from './AboutComponents/Serve/Serve'
import Past from './AboutComponents/Past/Past'

const About = () => {
  return (
    <div>
        <Box />
        <OurTeam />
        <Success />
        <Serve />
        <Past />
    </div>
  )
}

export default About