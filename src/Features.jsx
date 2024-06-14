import React from 'react'
import Fbox from './FeaturesComponents/Fbox/Fbox'
import Details from './FeaturesComponents/Details/Details'
import Results from './FeaturesComponents/Results/Results'
import Done from './FeaturesComponents/Done/Done'
import Proc from './FeaturesComponents/Proc/Proc'

const Features = () => {
  return (
    <div>
        <Fbox />
        <Details />
        <Results />
        <Done />
        <Proc />
    </div>
  )
}

export default Features