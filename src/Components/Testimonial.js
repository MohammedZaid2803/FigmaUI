import React from 'react'
import '../Style/testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial-content'>
      <div className='container pb-5 px-5'>
        <div className='row text-center text-white'>
            <div className=' pt-5 fs-5 fw-bold'>TESTIMONIAL</div>
            <div className='px-5 fs-1 fw-bold'>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</div>
            <div style={{ height: "100%", width: "100%",textAlign:"center" }} className='pt-5'>
            <img
              src="../Assets/Ovaltestimonial.png"
              alt="reload"
              className="img-fluid"
            />
          </div> 
            <div className='pt-2'>Ian Klein</div>
            <div  className='pt-2'>Digital Marketer</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
