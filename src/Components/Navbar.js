import React from 'react'
import "../Style/navbar.css"

const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
    <div className="container"> {/* Use container for padding on both sides */}
      <div className="d-flex w-100 justify-content-between align-items-center">
           {/* Centered & Bold Logo */}
           <a className="navbar-brand mx-auto fw-bold" href="/" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Brainwave.io
        </a>

        {/* Navbar Links on the Left */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#demos">
                Demos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pages">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#support">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

     
        {/* Get Started Button on the Right */}
        <form className="d-flex">
          <button className="btn btn-primary" type="button">
          Get Started a project
          </button>
        </form>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>

    
  )
}

export default Navbar
