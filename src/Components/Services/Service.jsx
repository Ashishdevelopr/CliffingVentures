import React from 'react'
import "../../Components/Components.css"
import LedManufacturing from "../../assets/Manufacturing.svg"
import Finance from "../../assets/Finance.svg"
import RealEstate from "../../assets/RealEstate.svg"
import Broking from "../../assets/advisory.svg"
import "./Service.css"
import { useNavigate } from 'react-router-dom'

const Service = () => {
    const navigate = useNavigate()

    const allServices = [
        {
            title:"Led Manufacturing",
            desc:"Our specialization in aluminum die-cast LED components ensures precision, durability, cost-effectiveness for diverse applications, meeting clients' evolving needs in various settings, from towering high-rises to charming small-town streetlights.",
            image:LedManufacturing,
            btnMore:"led-manufacturing",
            direction:"flex-lg-row",
            order:"order-1 order-0"
        },
        {
            title:"Finance Education",
            desc:"Our service is dedicated to early financial education in schools, empowering children with essential skills for informed financial decisions, effectively bridging the gap in financial literacy among young adults. Our tailored programs instill practical knowledge, fostering a lifelong understanding of financial concepts.",
            image:Finance,
            btnMore:"finance-education",
            direction:"flex-lg-row-reverse",
            order:"order-0 order-1"

        },
        {
            title:"Broking and Advisory",
            desc:"Discover the advantages of financial broking with us. Whether you seek comprehensive services from our full-service brokers or cost-effective options with our discount brokers, we provide access to diverse financial instruments, professional advice, and hassle-free trading. ",
            image:Broking,
            btnMore:"broking-advisory",
            direction:"flex-lg-row",
            order:"order-1 order-0"

        },
        {
            title:"Real Estate",
            desc:"Cliffing Venture specializes in diverse real estate transactions, both private and commercial. Our professional approach ensures tailored solutions to meet client needs. We employ strategic expertise, ensuring a seamless experience for our clients by aligning our services with their unique requirements.",
            image:RealEstate,
            btnMore:"real-estate",
            direction:"flex-lg-row-reverse",
            order:"order-0 order-1"

        },
    ]
    return (
        <div>
            <div className='container-lg my-5 py-5 px-md-5  px-4 mx-auto' id="service">
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h5 className='page-title'>Our Services</h5>
                        <h2 className="lh-1 page-subtitle display-5 fw-bold d-flex justify-content-center ">High-impact services</h2>
                        <p className='page-title-desc d-flex justify-content-center'>Our experts will guide you towards a secure financial future and peace of mind. </p>
                    </div>
                </div>

                {
                    allServices.map((services, id)=>(
                        <div className={`row ${services.direction}  align-items-center service-title g-5 mb-4 mb-md-0`}key={id}>
                    <div class={`${services.order} col-lg-7`}>
                        <h1 class="display-5 fw-bold text-body-emphasis align-center lh-sm mb-3">
                        {services.title}
                        </h1>
                        <p class="fw-normal lh-base">{services.desc}</p>

                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="button-primary" onClick={()=>{navigate(`${services.btnMore}`)}}>Know Services</button>
                            <button type="button" class="button-secondary d-none d-md-block" onClick={()=>{navigate("/contact-us")}} >Contact Us</button>
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

            </div>
        </div>
    )
}

export default Service