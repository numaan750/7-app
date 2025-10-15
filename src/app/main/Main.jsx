import React from 'react'
import Hero from '../components/home/Hero'
import Aboutus from '../components/about/Aboutus'
import Companies from '../components/componies/Companies'
import Services from '../components/services/Services'
import Workwithus from '../components/workwithus/Workwithus'
import Joinsection from '../components/joinsection/Joinsection'
import Blog from '../components/blog/Blog'
import Reviewa from '../components/reviews/Reviewa'


const Main = () => {
  return (
    <div>
       <Hero />
       <Aboutus />
       <Companies />
       <Services />
       <Workwithus />
       <Joinsection />
       <Reviewa />
       <Blog />
    </div>
  )
}

export default Main