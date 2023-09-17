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
                            <p class="fw-normal lh-base text-white">At Cliffing Ventures, we are driven by a passion for financial empowerment and a commitment to your peace
                                of mind. With a history spanning over 7 years, we have established ourselves as trusted partners in your financial journey. Our dedicated
                                team of experts brings together a wealth of knowledge and experience to provide you with tailored solutions that fit your unique needs. <br /><br />
                                Our story is one of evolution and growth. Since our inception in [Year of Establishment], we have strived to make financial success accessible
                                to everyone. We understand that your financial aspirations are as unique as you are, and that's why we take a personalized approach to help you
                                achieve your goals. Whether you're dreaming of a comfortable retirement, investing in your child's education, or safeguarding your family's future,
                                we are here to guide you every step of the way. With a commitment to trust, transparency, and results, we measure our success by your success. </p>

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