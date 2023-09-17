import React from 'react'
import AboutTeamImage from "../../assets/aboutTeam.jpg"
import "./About.css"

const AboutImage = () => {
    return (
        <div className='about-image-back'>
            <div className='container-lg col-xxl-8'>
                <div className="row">
                    <div class="col-lg-12">
                    <div className=''>
                        <img src={AboutTeamImage} className=" about-image img-fluid rounded mx-auto d-block" width="80%" height="80%" alt='about-image'></img>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default AboutImage