import React from 'react'
import "./Navbar.css"
import cliffingVentures from "../../assets/CFV.svg"
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='navbar-start bg-white'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg">
          <a href="/">
          <img src={cliffingVentures} alt="Cliffing_Ventures_Logo" className="d-inline-block align-text-top cliffing-logo img-fluid"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav-section" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about-us">About</NavLink>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>

                <ul className="dropdown-menu ">
                  <li><NavLink className="dropdown-item " to="/led-manufacturing">LED Manufacturing</NavLink></li>
                  <li><NavLink className="dropdown-item " to="/finance-education">Finance Education</NavLink></li>
                  <li><NavLink className="dropdown-item " to="/real-estate">Real Estate</NavLink></li>
                  <li><NavLink className="dropdown-item " to="/broking-advisory">Broking Advisory</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active button-primary" to="/contact-us">Contact Us</NavLink>
              </li>
              
              {/* <li className="nav-item d-none d-lg-block" >
                <a className="nav-link navbar-socials" aria-current="page" href="https://www.instagram.com/businessbelieve/" target="_blank"><i class="fa-brands fa-square-instagram nav-icons fs-1"></i></a>
              </li> */}
              
              {/* <li className="nav-item d-none d-lg-block" >
                <a className="nav-link navbar-socials" aria-current="page" href="https://wa.me/919324280652" target="_blank"><i class="fa-brands fa-square-whatsapp fs-1"></i></a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar