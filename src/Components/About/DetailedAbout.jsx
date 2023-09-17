import React from 'react'
import DetailAbout from "../../assets/DetailAbout.svg"
import DetailTeam from "../../assets/DetailTeam.svg"
import DetailContact from "../../assets/DetailContact.svg"
import Contacts from '../Contact/Contact'

const DetailedAbout = () => {
  return (
    <div>
      <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-4 fw-bold text-white">About Us</h1>
          <p className="my-3 text-white">At Cliffing Ventures, we're dedicated to your financial well-being and property dreams. Our experienced team provides tailored solutions to help you succeed in real estate and finance.</p>
        </div>
      </div>



      <div>
        <div className='container-lg col-xxl-8 px-2 mb-5'>

          {/* 1 */}
          <div className="row flex-lg-row align-items-center service-title g-5">
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                Our Vision
              </h1>
              <p class="fw-normal lh-base">
              We here create a future where financial prosperity and real estate success are within reach for everyone. We aim to revolutionize the industries of finance, LED manufacturing, and real estate by providing innovative solutions and unmatched expertise. Our commitment is to empower individuals and businesses with the knowledge and resources they need to thrive in these dynamic fields.                </p>
            </div>
            <div className="col-12 col-sm-11 col-lg-5 mx-auto">
              <div className=''>
                <img src={DetailAbout} className="img-fluid" width="120%" height="150%" />
              </div>
            </div>
          </div>


          {/* 2 */}
          <div className="row flex-lg-row-reverse align-items-center service-title g-5 mt-3">
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                Our Approach
              </h1>
              <p class="fw-normal lh-base">
              Our vision extends beyond the ordinary. We envision a world where financial empowerment is not just a dream but a tangible reality. In the realm of LED manufacturing, we strive to be pioneers, innovating and creating sustainable solutions that illuminate the future. In finance education, we aim to be the beacon of knowledge, guiding individuals and businesses toward financial literacy and independence. In the world of real estate, we aspire to help you find your place in the world, whether it's your first home, a strategic investment, or a thriving business location. Our vision is to be the driving force behind your success, providing the tools and expertise you need to achieve your financial and real estate goals.
                </p>
            </div>
            <div className="col-12 col-sm-11 col-lg-5 mx-auto">
              <div className=''>
                <img src={DetailTeam} className="img-fluid" width="120%" height="150%" />
              </div>
            </div>
            {/* 2 */}
          </div>
          

          {/* 3 */}
          <div className="row flex-lg-row align-items-center g-5">
            <div class="col-lg-7">
              <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                Our Process
              </h1>
              <p class="fw-normal lh-base">
              our process is designed to ensure your success. We begin by thoroughly understanding your goals, whether it's LED manufacturing, financial education, or real estate ventures. Next, we leverage our industry expertise to develop a customized strategy tailored to your needs. Our transparent and efficient process ensures that you receive the support and guidance required to achieve your objectives. From LED manufacturing solutions to real estate investments, we're your trusted partner throughout your journey to financial growth and property ownership.</p>
            </div>

            <div className="col-12 col-sm-11 col-lg-5 mx-auto">
              <div className=''>
                <img src={DetailContact} className="img-fluid" width="120%" height="150%" />
              </div>
            </div>

          </div>
        </div>

        <Contacts/>
      </div>
    </div>
  )
}

export default DetailedAbout