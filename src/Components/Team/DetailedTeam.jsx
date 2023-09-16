import React from 'react'
import member2 from "../../assets/01.jpg"
import member1 from "../../assets/02.jpg"
import member3 from "../../assets/03.jpg"
import member4 from "../../assets/06.jpg"
import "../../Components/Components.css"
import Contacts from '../Contact/Contact'
import FAQ from '../FAQ/FAQ'

const DetailedTeam = () => {

  const teamMembers = [
    {
      name: 'James Bond',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member1
    },
    {
      name: 'Harry Potter',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member2
    },
    {
      name: 'Ethan Hunt',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member3
    },
    {
      name: 'Jack Sparrow',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member4
    },
    {
      name: 'James Bond',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member1
    },
    {
      name: 'Jack Sparrow',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member4
    },
    {
      name: 'Harry Potter',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member2
    },
    {
      name: 'Ethan Hunt',
      role: 'Investement Manager',
      desc: 'James handles activities related to financial planning, investing, and managing a portfolio for clients.',
      profileImage: member3
    },
  ]
  return (
    <div>
      <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-4 fw-bold text-white">Our Team</h1>
          <p className="my-3 text-white">At Cliffing Ventures, we're dedicated to your financial well-being and property dreams. Our experienced team provides tailored solutions to help you succeed in real estate and finance.</p>
        </div>
      </div>


      <div className=' container mb-5'>

        <div className="row g-4">
          {/* <!-- All Team Members --> */}
          {
            teamMembers.map((members, id) => (
              <div className="col-sm-6 col-lg-3 col-xl-3" key={id}>
                <div className="card p-2 shadow h-100">
                  <div className="card-image-scale rounded-3 position-relative">
                    <img src={members.profileImage} className="card-img" alt="" />
                  </div>
                  <div className="card-body px-2">
                    <h5 className="card-title">{members.name}</h5>
                    <h6 className='card-role'>{members.role}</h6><hr />
                    <h6 className="mb-0 fw-normal text-start lh-base">{members.desc}</h6>
                    <button class="btn team-button mt-2 col-12 mx-auto" type="button">Contact Now</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

      </div>
        <Contacts/>
    </div>
  )
}

export default DetailedTeam