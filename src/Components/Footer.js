import React from 'react'
import '../Style/footer.css'

const Footer = () => {
  return (
    <div className='footer-content text-white pb-5'>
      <div className='container'>
        <div className='row text-center p-5'>
            <div className='col-md-8'>
                <div className=' fs-3 pb-2 fw-bold'>Ready to launch your next project?</div>
                <div className=' px-5  fw-bold'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
            </div>
            <div className='col-md-4'>
            <form className="d-flex">
          <button className="btn btn-primary" type="button">
          Get Started a project
          </button>
        </form>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-md-4 '>
                <div className='py-2 fw-bold fs-3'>Brainwave.io</div>
                <div className='py-2 fs-6'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
                <div className='py-2' style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/Socialsocial.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
            </div>
            <div className='col-md-2'>
                <div className='py-3'>Company</div>
                <div>About us</div>
                <div>Contact us</div>
                <div>Careers</div>
                <div>Press</div>
            </div>
            <div className='col-md-2'>
            <div className='py-3'>Product</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>News</div>
                <div>Help desk</div>
                <div>Support</div>
            </div>
            <div className='col-md-2'>
            <div className='py-3'>Services</div>
                <div>Digital Marketing</div>
                <div>Content Writing</div>
                <div>SEO for Business</div>
                <div>UI Design</div>
            </div>
            <div className='col-md-2'>
            <div className='py-3'>Legal</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
                <div>Return Policy</div>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
