import React from 'react'
import "./Service.css"
const Service = () => {
    const serviceCards = [
        {
            title: "LED Manufacturing",
            desc: "Grow your wealth with expert investment strategies and diversified portfolios for long-term.",
            image:"https://assets.website-files.com/63becc2faa5fe51a6fa9a7d7/63c02734cfbc6c8ae72d8b8e_development-thumbnail-image-workplace-x-webflow-template.svg"
        },
        {
            title: "Finance Education",
            desc: "Grow your wealth with expert investment strategies and diversified portfolios for long-term.",
            image:"https://assets.website-files.com/63becc2faa5fe51a6fa9a7d7/63c027260c0d1c7a175d21cc_design-thumbnail-image-workplace-x-webflow-template.svg"
        },
        {
            title: "Real Estate",
            desc: "Grow your wealth with expert investment strategies and diversified portfolios for long-term.",
            image:"https://assets.website-files.com/63becc2faa5fe51a6fa9a7d7/63c0274233a4b85992dc2335_marketing-thumbnail-image-workplace-x-webflow-template.svg"
        },
    ]
    return (
        <div className='service-back' id="services">
            <div className='container '>
                <div className='row'>
                    <div className='col-md-12'>
                        <h5 className='page-title'>Our Services</h5>
                        <h2 className="lh-1 page-subtitle display-5 fw-bold">High-impact services</h2>
                        <p className='page-title-desc'>Our experts will guide you towards a secure financial future and peace of mind. </p>
                    </div>
                </div>
            </div>

            <div className='container '>
                <div className='row pt-4'>
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
{
    serviceCards.map((service, id)=>(
<div className="service-item"key={id}>
                                <a className="card service-category-card w-inline-block style-VBWBP" id="style-VBWBP">
                                    <div class="image-wrapper">
                                        <img src={service.image} alt="Development" className='image' />
                                    </div>
                                    <div class="service-category-card-content-bottom">
                                        <div class="mg-bottom-8px">
                                            <div class="flex-horizontal space-between">
                                                <h3 class="mg-bottom-0 card-title style-TFblp" id="style-TFblp">
                                                    {service.title}
                                                </h3>
                                                <div class="btn-circle-secondary small no-hover">
                                                    <div>
                                                        <span class="line-rounded-icon">
                                                            
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="color-neutral-600 service-text">
                                            {service.desc}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        
    ))
}
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
