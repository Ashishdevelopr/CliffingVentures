import React from 'react'
import "./Footer.css"
import cliffingVentures from "../../assets/CFV.svg"
const Footer = () => {
  return (
    <div className="footerback">

      <div className="container-lg py-5  mx-auto ">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div>
              <img src={cliffingVentures} alt="Cliffing_Ventures_Logo" className="d-inline-block align-text-top cliffing-logo img-fluid" />
              <p className="">Experience a realm of opportunities, where expertise meets innovation. Empower your journey with us – building success, one partnership at a time.</p>
            </div>
            <ul className="list-unstyled d-flex">
              <li className=" "><a className="link-dark" href="#" target="_blank"><i class="fa-brands fa-whatsapp footericon "></i></a></li>
              <li className="ms-3 "><a className="link-dark" href="#" target="_blank"><i class="fa-brands fa-instagram footericon"></i> </a></li>
              <li className="ms-3 "><a className="link-dark" href="#" target="_blank"> <i class="fa-brands fa-facebook-messenger footericon"></i></a></li>
            </ul>
          </div>
          <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
            <div className="">
              <h5 className="fw-semibold footer-head">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none">Home</a>
                </li>
                <li>
                  <a href="/about-us" className="text-decoration-none">About Us</a>
                </li>
                <li>
                  <a href="/gallery" className="text-decoration-none">Gallery</a>
                </li>
                <li>
                  <a href="/contact-us" className="text-decoration-none">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h5 className="fw-semibold footer-head">Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/led-manufacturing" className="text-decoration-none">LED Manufacturing</a>
                </li>
                <li>
                  <a href="/finance-education" className="text-decoration-none">Finance Education</a>
                </li>
                <li>
                  <a href="/real-estate" className="text-decoration-none">Real Estate</a>
                </li>
                <li>
                  <a href="/broking-advisory" className="text-decoration-none">Broking Advisory</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h5 className="fw-semibold footer-head">Get in Touch</h5>
              <ul className="list-unstyled list">
                <li>
                  <p>Address: Office No :- 1703,
                    Fairmont Office Tower,
                    Sheikh Zayed road,
                    Dubai,U.A.E.<br /></p>
                    <p> Address : Mindspace Malad, New Link Rd, Malad West, Mumbai, Maharashtra 400064</p>
                    
                  
                </li>
                {/* <li>
                  <p> Email: <a href="mailto:ashishdevelopr@gmail.com" className="link-reset">ashishdevelopr@gmail.com</a>
                  </p>
                </li>

                <li>
                  <p> Phone: <a href="tel:9324280652" className="link-reset">9324280652</a>
                  </p>
                </li> */}

              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="container-lg">
        <div className="d-flex justify-content-between pt-1 border-top border-warning border-opacity-50">
          <p>&copy; 2023 Cliffing Ventures, Inc. All rights reserved.</p>
        </div>

      </div>

    </div>
  )
}

export default Footer