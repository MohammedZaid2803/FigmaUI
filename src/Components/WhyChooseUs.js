import React ,{useEffect}from "react";
import "../Style/whychooseus.css"

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyChooseUs = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <div className=' whychoosecontent'>
    <div className='container pb-5'>
      <div className='row text-center'>
        <div className=' text-danger py-5 fw-bold'>
        Why choose us
        </div>
        <div className='pb-5 px-5 fs-1 fw-bold'>
        People choose us because we serve the best for everyone
        </div>
      </div>

      <div className='row pt-5'>
    <div className='col-md-6 d-flex pb-5' data-aos="slide-right">
        <div className='col-md-2'>
        <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/Iconchooseicon1.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
        </div>
        <div className='col-md-10'>
            <div className='fw-bold pb-2'>Dedicated project manager</div>
            <div className='fs-6'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
        </div>
    </div>
    <div className='col-md-6 d-flex pb-5' data-aos="slide-left" >
    <div className='col-md-2'>
    <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/Iconchooseicon2.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
    </div>
    <div className='col-md-10'>
        <div className='fw-bold pb-2'>Organized tasks</div>
        <div className='fs-6'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
    </div>
    </div>
      </div>

      <div className='row pt-5'>
    <div className='col-md-6 d-flex pb-5' data-aos="slide-right">
        <div className='col-md-2'>
        <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/Iconchooseicon3.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
        </div>
        <div className='col-md-10'>
            <div className='fw-bold pb-2'>Dedicated project manager</div>
            <div className='fs-6'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
        </div>
    </div>
    <div className='col-md-6 d-flex pb-5' data-aos="slide-left">
    <div className='col-md-2'>
    <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/Iconchooseicon4.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
    </div>
    <div className='col-md-10'>
        <div className='fw-bold pb-2'>Organized tasks</div>
        <div className='fs-6'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
    </div>
    </div>
      </div>

      <div className='row py-5 text-center'>
        <div className='col-md-8'>
            <div className='fw-bold fs-3 pb-3'>Ready to launch your next project?</div>
            <div className='px-5 fs-6'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
        </div>
        <div className='col-md-4'>
        <button className="btn btn-primary" type="button">
          Get Started a project
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhyChooseUs
