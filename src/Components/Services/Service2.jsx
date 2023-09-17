import React from 'react'
import "../../Components/Components.css"
import LedManufacturing from "../../assets/Manufacturing.svg"
import Finance from "../../assets/Finance.svg"
import RealEstate from "../../assets/RealEstate.svg"
import Broking from "../../assets/advisory.svg"
import "./Service.css"

const Service2 = () => {
    const allServices = [
        {
            title:"Led Manufacturing",
            desc:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
            image:LedManufacturing,
            btnMore:"finance",
            btnContact:"contact",
            direction:"flex-lg-row",
            order:"order-1 order-0"
        },
        {
            title:"Finance Education",
            desc:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
            image:Finance,
            btnMore:"finance",
            btnContact:"contact",
            direction:"flex-lg-row-reverse",
            order:"order-0 order-1"

        },
        {
            title:"Broking and Advisory",
            desc:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
            image:Broking,
            btnMore:"finance",
            btnContact:"contact",
            direction:"flex-lg-row",
            order:"order-1 order-0"

        },
        {
            title:"Real Estate",
            desc:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
            image:RealEstate,
            btnMore:"finance",
            btnContact:"contact",
            direction:"flex-lg-row-reverse",
            order:"order-0 order-1"

        },
    ]
    return (
        <div>
            <div className='container-lg my-5 py-5 px-md-5  px-4 mx-auto'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h5 className='page-title'>Our Services</h5>
                        <h2 className="lh-1 page-subtitle display-5 fw-bold d-flex justify-content-center ">High-impact services</h2>
                        <p className='page-title-desc d-flex justify-content-center'>Our experts will guide you towards a secure financial future and peace of mind. </p>
                    </div>
                </div>
                {/* 1 */}
                {
                    allServices.map((services, id)=>(
                        <div className={`row ${services.direction}  align-items-center service-title g-5 mb-4 mb-md-0`}>
                    <div class={`${services.order} col-lg-7`}>
                        <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                        {services.title}
                        </h1>
                        <p class="fw-normal lh-base">{services.desc}</p>

                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="button-primary">Know Services</button>
                            <button type="button" class="button-secondary d-none d-md-block">Contact Us</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                        <div className=''>
                            <img src={services.image} className="img-fluid" width="120%" height="150%" />
                        </div>
                    </div>
                </div>
                    ))
                    
                }
                

                {/* 2 */}
                {/* <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div class="col-lg-7">
                    
        
                        <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                            Finance Education
                        </h1>
                        <p class="fw-normal lh-base">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="button-primary">Know Services</button>
                            <button type="button" class="button-secondary">Contact Us</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                        <div className=''>
                            <img src={Finance} className="img-fluid" width="120%" height="150%" />
                        </div>
                    </div>

                </div> */}

                {/* 3 */}
                {/* <div className="row flex-lg-row align-items-center g-5">
                    <div class="col-lg-7">
                        <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                            Broking and Advisory
                        </h1>
                        <p class="fw-normal lh-base">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="button-primary">Know Services</button>
                            <button type="button" class="button-secondary">Contact Us</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                        <div className=''>
                            <img src={Broking} className="img-fluid" width="120%" height="150%" />
                        </div>
                    </div>

                </div> */}

                {/* 4 */}
                {/* <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div class="col-lg-7">
                        <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                            Real Estate
                        </h1>
                        <p class="fw-normal lh-base">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="button-primary">Know Services</button>
                            <button type="button" class="button-secondary">Contact Us</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                        <div className=''>
                            <img src={RealEstate} className="img-fluid" width="120%" height="150%" />
                        </div>
                    </div>

                </div> */}

            </div>
        </div>
    )
}

export default Service2