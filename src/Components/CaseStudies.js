import React from 'react'

const CaseStudies = () => {
  return (
    <div className='container pb-5'>
      <div className='row text-center'>
    <div className='text-danger pt-5 fw-bold'>Case studies</div>
    <div className='pb-5 px-5 fs-1 fw-bold'>Our works describe why we are the best in the business</div>
      </div>
      <div className='row text-center'>
        <div className='col-md-6 d-flex flex-column'>
        <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/casestudies1.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/copy 5casestudies3.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
        </div>
        <div className='col-md-6 d-flex flex-column'>
        <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/copy 4casestudies2.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/copy 6casestudies4.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div>
      <div style={{ height: "100%", width: "100%",textAlign:"center" }} className='py-5'>
            <img
              src="../Assets/Button 1btncase.png"
              alt="reload"
              className="img-fluid"
            />
          </div> 
      </div>
    </div>
  )
}

export default CaseStudies
