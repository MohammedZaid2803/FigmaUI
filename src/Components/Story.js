import React ,{useEffect}from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Story = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);
  return (
    <div className="container">

    <div className="row "  data-aos="zoom-in">
<div className="col-md-6 ">
<div className="fs-6 pb-5 text-danger fw-bold">OUR STORY</div>
<div className="fs-1 fw-bold">We know how everything works and why your business is failing over and over again.</div>
<div className=" py-5 ">
          <div style={{ height: "100%", width: "100%" }}>
            <img
              src="../Assets/story1.png"
              alt="reload"
              className="img-fluid"
            />
          </div>
        </div>
</div>
<div className="col-md-6 flex-column align-content-center">
<div className="col-md-12 d-flex "> 
          <div className="col-md-6 position-relative">
            <div style={{ height: "50%", width: "80%" }} className="">
              <img
                src="../Assets/story2.png"
                alt="reload"
                className="img-fluid"
              />
            </div>
            <div style={{ height: "15%", width: "15%",position:"absolute",top:"-10%",right:"12%" }} >
              <img
                src="../Assets/story2.1.png"
                alt="reload"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6  d-flex justify-content-center align-item-center ">
            <div style={{ height: "50%", width: "50%" }} >
              <img
                src="../Assets/story3.png"
                alt="reload"
                className="img-fluid"
              />
            </div>
           
          </div>
          </div> 
          <div className="col-md-12 py-5 text-center fs-6">
          <div >We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</div>
          </div>
</div>
    </div>
    <div className="row py-5">
    <div className="col-md-4 px-5 d-flex flex-column">
    <div className="text-center fs-3 fw-bold">
    1M+
    </div>
    <div className="text-center">
    Customers visit Omega every month to get their service done.
    </div>
    </div>
    <div className="col-md-4 px-5 d-flex flex-column">
    <div className="text-center fs-3 fw-bold">
    92%
    </div>
    <div className="text-center">
    Satisfaction rate comes from our awesome customers.
    </div>
    </div>
    <div className="col-md-4 px-5 d-flex flex-column">
    <div className="text-center fs-3 fw-bold">
    4.9/5.0
    </div>
    <div className="text-center">
    Average customer ratings we have got all over internet.
    </div>
    </div>
    </div>
   
    </div>
  );
};

export default Story;
