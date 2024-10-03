import React from 'react'
import "../Style/home.css"

const Home = () => {
  return (
    <div className='home-bg'>
<div className='container animate__animated animate__slideInLeft'>
     <div className='row d-flex'>
        <div className='col-md-6 p-md-5  align-content-center'>
        <div className='text-danger py-5'>
            LET'S SHIFT YOUR BUSSINESS
        </div>
        <div className='fs-1 fw-bold py -5'>
           SHIFT YOUR BUSSINESS FAST WITH SHADE PRO
        </div>
        <div className='fs-6 py-5'>
        With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.
        </div>
          {/* Get Started Button on the Right */}
          <form className="d-flex pb-5">
          <button className="btn btn-primary" type="button">
            Get Started a project
          </button>
        </form>
        </div>
        <div className='col-md-6 p-md-5 text-center align-content-center'>
        <div style={{height:"15%",width:"15%"}}>
            <img src='../Assets/Fill1.png' alt='reload' className="img-fluid"/>
        </div>
        <div style={{height:"100%",width:"100%"}}>
            <img src='../Assets/Oval-1.png' alt='reload' className="img-fluid" />
        </div>
        </div>
     </div>
    </div>
    </div>
    
  )
}

export default Home
