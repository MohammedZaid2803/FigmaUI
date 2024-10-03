import React from 'react'
import Home from './Home';
import Service from './Service';
import Story from './Story';
import WhyChooseUs from './WhyChooseUs';
import CaseStudies from './CaseStudies';
import Testimonial from './Testimonial';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div>
    <Home/>
   <Service/>
   <Story/>
   <WhyChooseUs/>
   <CaseStudies/>
   <Testimonial/>
   <Footer/>
    </div>
  )
}

export default Dashboard
