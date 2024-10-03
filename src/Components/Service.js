import React from 'react'
import 'animate.css';

const Service = () => {
  return (
    <div className='container '>
       <div className='col-md-12'>
      <div className='py-5 text-center align-content-center text-danger'>OUR SERVICES</div>
      <div className='pb-md-5 text-center align-content-center fs-1 fw-bold'>We provide great services for our customers based on needs</div>
      </div> 
      <div className='row d-flex'>
        <div className='col-md-4 animate__animated animate__pulse animate__infinite'>
             <div style={{height:"100%",width:"100%"}}>
            <img src='../Assets/1.png' alt='reload' className="img-fluid" />
        </div></div>
        <div className='col-md-4 animate__animated animate__pulse animate__infinite'>
            
        <div style={{height:"100%",width:"100%"}}>
            <img src='../Assets/2.png' alt='reload' className="img-fluid" />
        </div>
        </div>
        <div className='col-md-4 animate__animated animate__pulse animate__infinite'>
        <div style={{height:"100%",width:"100%"}}>
            <img src='../Assets/3.png' alt='reload' className="img-fluid" />
        </div>
        </div>
      </div>
     
     <div className='p-5 row'>
        <div className='col-md-3'>
        <div style={{height:"100%",width:"100%"}}>
            <img src='../Assets/oval2.png' alt='reload' className="img-fluid" />
        </div>
        </div>
        <div className='col-md-9'>
        <div style={{height:"15%",width:"15%"}} className='pb-md-5'>
            <img src='../Assets/Stars.png' alt='reload' className="img-fluid" />
        </div>
        <div className='fs-3 fw-bold pb-md-5'>“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”</div>
        <div><b>Franklin Hick</b>  Web Developer</div>

        </div>
      
     </div>
    </div>
  )
}

export default Service
