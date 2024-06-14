import React from 'react'
import Level from './HomeComponents/Level/Level'
import Team from './HomeComponents/Team/Team'
import Provisions from './HomeComponents/Provisions/Provisions'
import Experts from './HomeComponents/Experts/Experts'
import Cases from './HomeComponents/Cases/Cases'
import Testimonial from './HomeComponents/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
        <Level />
        <Team />
        <Provisions />
        <Experts />
        <Cases />
        <Testimonial />
    </div>
  )
}

export default Home