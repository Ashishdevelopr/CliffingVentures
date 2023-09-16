import React from 'react'

import "./Home.css"

import sl1 from "../../assets/bgs.jpg"
import sl2 from "../../assets/bgs1.jpg"
import sl3 from "../../assets/bgs2.jpg"


const Home2 = () => {
  return (
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img" src={sl1} width="100%" height="100%" aria-hidden="true" focusable="false"></img>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Maximize Your <span className='head-color'>Wealth</span></h1>
                <p>Unlock the path to financial success with our expert investment tips and strategies.</p>
                <p><a className="btn btn-color">Start Now</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img" src={sl2} width="100%" height="100%" aria-hidden="true" focusable="false"></img>
            <div className="container">
              <div className="carousel-caption">
                <h1>Take Control of Your <span className='head-color'>Finances</span> </h1>
                <p>Learn effective budgeting techniques to secure your financial future.</p>
                <p><a className="btn btn-color">Get Started</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img" src={sl3} width="100%" height="100%" aria-hidden="true" focusable="false"></img>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Financial Freedom <span className="head-color"> Made Easy </span></h1>
                <p>Empower yourself with our comprehensive resources to achieve financial independence.</p>
                <p><a className="btn btn-color">Explore</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Home2