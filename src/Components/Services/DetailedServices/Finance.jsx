import React from 'react'
import education from "../../../assets/education.svg"

const Finance = () => {
  return (
    <div>
      <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-4 fw-bold text-white">Finance Education </h1>
          <p className="my-3 text-white">Our service provides early financial education in schools, arming children with essential skills to make informed financial decisions, bridging the gap in financial literacy among young adults.</p>
        </div>
      </div>

      <div className='container-lg my-2 py-2 px-md-3  px-2 mx-auto'>
        <div className="row flex-lg-row align-items-center">
          <div class="col-lg-8">
            <h1 class="fs-2 fw-bold text-body-emphasis align-center lh-sm mb-3">
              Financial education and youth <span className="gradient-text typewriter">
              </span>
            </h1>
            <p class="fw-normal lh-base">Financial literacy is a core life skill for participating in modern society. Children are growing up in an increasingly complex world where they will eventually need to take charge of their own financial future.<br /><br />
              National surveys show that young adults have amongst the lowest levels of financial literacy. This is reflected by their general inability to choose the right financial products and often a lack of interest in undertaking sound financial planning. Even from an early age, children need to develop the skills to help choose between different career and education options and manage any discretionary funds they may have, whether from allowances or part time jobs. These funds may entail the use of savings accounts or bank cards.<br /><br />
              Education and Awareness recommend that financial education start as early as possible and be taught in schools. Including financial education as part of the school curriculum is a fair and efficient policy tool. Financial education is a long-term process. Building it into curriculums from an early age allows children to acquire the knowledge and skills to build responsible financial behaviour throughout each stage of their education. This is especially important as parents may be ill-equipped to teach their children about money and levels of financial literacy are generally low around the world.

            </p>
          </div>
          <div className="col-12 col-sm-11 col-lg-4 mx-auto">
            <img src={education} className="img-fluid" width="120%" height="150%" />
          </div>
        </div>
      </div>

      <div className='container-lg my-2 py-2 px-md-3  px-2 mx-auto'>
        <div className="row flex-lg-row align-items-center">
          <div class="col-lg-12">
            <h1 class="fs-2 fw-bold text-body-emphasis align-center lh-sm mb-3">
              Financial Literacy: The 5 Principles Explained <span className="gradient-text typewriter">
              </span>
            </h1>
            <p class="fw-normal lh-base">Financial literacy empowers you to be in control of your financial well-being and build a secure future. The five principles of financial literacy enable you to use money wisely, make informed decisions about your finances, create budgets, manage debt and plan your financial future.
              <br /><br />
              Financial literacy is the knowledge of budgeting, saving and investing, enabling individuals to make informed decisions about their personal finances.

            </p>
            <ul>
              <li className='fw-bold'>Financial literacy is the ability to make wise decisions with your money.</li> <br/>
              <li className='fw-bold'>The five principles of financial literacy are earning, saving, borrowing, spending and protecting assets.</li><br/>
              <li className='fw-bold'>Financial literacy helps you make better financial decisions and improves overall financial well-being.</li><br/>
              <li className='fw-bold'>Financial literacy skills include finding, understanding and using resources for informed decision- making.</li><br/>
              <li className='fw-bold'>Developing financial literacy skills promotes financial self-sufficiency and stability.</li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Finance