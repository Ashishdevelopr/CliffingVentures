import React from 'react'
import "./Contact.css"

const DetailedContact = () => {
  return (
    <div>
      <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-4 fw-bold text-white">Contact Us</h1>
          <p className="my-3 text-white">At Cliffing Ventures, we're dedicated to your financial well-being and property dreams. Our experienced team provides tailored solutions to help you succeed in real estate and finance.</p>
        </div>
      </div>


      <div className="container-lg mt-4 mb-4 py-5">
        <div className="row flex-lg align-items-center g-5 py-0">

          <div className="col-md-5 col-sm-12 col-lg-5 mx-auto d-none d-md-block">
            <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
              Keep in touch
            </h1>
            <p class="fw-normal lh-base">
              We value your connection and look forward to hearing from you. Whether you have questions, feedback, or would simply like to explore opportunities in the worlds of LED manufacturing, finance, or real estate, don't hesitate to get in touch with us. Your inquiries and ideas are important to us, and we're here to assist you every step of the way.
              <br /><br />
              Feel free to reach out through the contact form below, drop us an email, or give us a call. We're committed to staying connected and helping you achieve your financial and real estate goals.
            </p>
          </div>


          <div className="col-md-6 col-sm-12 col-lg-6 mx-auto ">
            <section className='form-section'>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="John Hunt" required />
                <label for="floatingInput">Full name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" maxLength={10} placeholder="  " required />
                <label for="floatingPassword">Phone number</label>
              </div>

              <div class="form-floating mb-3">
                <textarea class="form-control" id="validationTextarea floatingInput" required placeholder=" "></textarea>
                <label for="floatingInput">Message</label>
              </div>

              <button class="btn contact-btn px-3 py-2 d-grid btn-lg col-12 mx-auto" type="submit">Submit form</button>
            </section>
          </div>


        </div>
      </div>


      <section class="py-2 py-md-11 mb-3 text-center ">
        <div class="container-lg">
          <div class="row border-top border-2 border-bottom py-5">

            <div class="col-12 col-md-6">
              <h3>Office Adress: </h3>
              <p class="text-body-secondary mb-4 mb-md-0 text-center">
              Mindspace Malad,<br />
              New Link Rd, Malad West,<br />
              Mumbai, Maharashtra 400064

              </p>
            </div>

            <div class="col-12 col-md-6">
              <h3>Email Us :</h3>
              <p class="text-body-secondary mb-4 mb-md-0">
                contact@cliffingventures.com<br />
                team@cliffingventures.com<br />
                support@cliffingventures.com<br />
              </p>
            </div>

          </div>
        </div>
      </section>

      <div class="container-lg-lg mb-4">
        <div class="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.571746999548!2d72.82653607865126!3d19.182712304699965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f3da079a5d%3A0x8b3c3da957c65f50!2sMindspace%20Malad!5e0!3m2!1sen!2sin!4v1694952798577!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>



    </div >
  )
}

export default DetailedContact