import React from 'react'
import "../../Components/Components.css"
import home_img from "../../assets/home2.svg"
import { Typewriter } from 'react-simple-typewriter'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
    return (
        <div className='container col-xxl-8 px-2 mb-5 py-4'>
        <div className="row flex-lg-row align-items-center g-5">
            <div class="col-lg-7">
                <h1 class="display-3 fw-bold text-body-emphasis align-center lh-sm mb-3">
                We Navigate the Path to Unlock Financial <span  className="gradient-text typewriter">
                <Typewriter
                  words={['Brand', 'Vision', 'Culture']}
                  loop={false}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={800}
                  
                />
              </span>
                </h1>
                <p class="fw-normal lh-base">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                    <button type="button" class="button-primary">Know Services</button>
                    <button type="button" class="button-secondary" onClick={()=>{navigate("/contact-us")}}>Contact Now</button>
                </div>
            </div>

             <div className="col-12 col-sm-11 col-lg-5 mx-auto">
            <div className=''>
              <img src={home_img} className="img-fluid" width="120%" height="150%"  />
            </div>
          </div>

        </div>
        </div>
    )
}

export default Home