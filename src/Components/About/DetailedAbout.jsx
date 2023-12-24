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
            <div class="col-lg-7">
              <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                Our Vision
              </h1>
              <p class="fw-normal lh-base">
              Looking forward, Cliffing Ventures envisions convergence—where manufacturing excellence, financial empowerment, and real estate guidance create a holistic platform for client success. In manufacturing, our vision is to lead by consistently delivering products that exceed expectations and solidifying our position as the preferred supplier for major LED light brands.<br></br><br></br>

In finance, our vision is transformative, fostering a community empowered with financial literacy. Through personalized stock broking services and advisory, we envision clients navigating financial markets with strategic foresight, resilience, and unwavering confidence. In real estate advisory, our forward-thinking approach involves staying ahead of market trends, guiding clients to confidently navigate a dynamic real estate landscape. Our goal is to be a trusted partner, providing insights and strategies that align with the long-term objectives of our clients, enabling them to thrive in real estate investments.        </p>
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
              At Cliffing Ventures, our approach is defined by precision, empowerment, and adaptability. In die casting, we ensure excellence by maintaining stringent quality standards and embracing innovation. The financial sector sees us empowering clients through personalized stock broking services and advisory, promoting transparency and strategic foresight. In real estate, our adaptability keeps us ahead of market trends, offering timely advice. Our integrative approach, spanning manufacturing, finance, and real estate, aims to not only meet but exceed expectations, fostering sustained success and advancement.
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
              Cliffing Ventures, established in 2017, is on a mission to excel in die casting and empower individuals in finance and real estate. In manufacturing, we set industry benchmarks, providing top-tier aluminum components for LED lights. In finance, we bridge knowledge gaps through personalized stock broking services. Our real estate mission involves offering timely advice, guiding clients through market dynamics. Our comprehensive approach ensures informed decisions, fostering success across sectors and contributing to broader economic advancement.</p>
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