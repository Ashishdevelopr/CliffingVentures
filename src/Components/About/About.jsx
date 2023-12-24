import React from 'react'
import AboutTeam from "../../assets/aboutBro.svg"
import "./About.css"
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (


        <>
            <div className='about-back'>
                <div className="container-lg my-5 py-5 px-md-5  px-4 mx-auto ">
                    <div className='row '>
                        <div className='col-md-12 text-center'>
                            <h5 className='page-title'>About Us</h5>
                            <h2 className="lh-1 text-white display-5 fw-bold  ">Discover Our Story</h2>
                            <p className='text-white '>Our Journey in Empowering You Toward Financial Security and Peace of Mind.</p>
                        </div>
                    </div>
                    <div className="row g-5 my-2">
                        <div className="col-lg-6">
                            <p class="fw-normal lh-base text-white">Founded in 2017, Cliffing Ventures has emerged as a prominent player in die casting, specializing in aluminum components for LED street lights. Our clientele includes industry giants such as Bajaj, Cromptons, and Philips, solidifying our reputation as a trusted supplier for major LED light brands. Recognizing the challenges individuals face in navigating financial markets, we expanded our services to include stock broking and advisory. </p>
                            
                            <p className='fw-normal lh-base text-white'>Our mission is to empower clients with the knowledge needed to make informed financial decisions. In response to the ever-changing economic landscape, we further diversified into real estate advisory, providing timely guidance to navigate market fluctuations and inflation. At Cliffing Ventures, whether in manufacturing excellence or financial and real estate services, our commitment remains unwavering—to guide individuals towards sustained financial success through informed decision-making. </p>

                            <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                                <button type="button" class="button-primary" onClick={() => { navigate("/about-us") }}>Know More About Us</button>
                            </div>
                        </div>

                        <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                            <div className=''>
                                <img src={AboutTeam} className="img-fluid" width="120%" height="150%" />
                            </div>
                        </div>
                    </div>


                </div>




            </div>
        </>
    )
}

export default About