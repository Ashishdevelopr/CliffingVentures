import React from 'react'
import notFound404 from "../../assets/404.svg"
import "../../Components/Components.css"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container py-5">
        {/* <div className="row">
          <div className="col-6">
          <img src={notFound404} className="image-404 img-fluid"  alt="Notfound-404"/>
          </div>
          <div className="col-6 text-center align-text-bottom">
          <h1 className='notfound-head'>404</h1>
          <h2 className='notfound-text'>Page Not Found</h2>
          <button type="button" class="button-primary" onClick={()=>{navigate("/")}}>Back to Home Page</button>
          </div>
        </div> */}
        <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div class="col-lg-7">
                    
                            {/* <i class="fa-regular fa-lightbulb icon-over-service"></i> */}

                        <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                        <button type="button" class="button-primary" onClick={()=>{navigate("/")}}>Back to Home Page</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                        <div className=''>
                            <img src={notFound404} className="img-fluid" width="120%" height="150%" />
                        </div>
                    </div>

                </div>
      </div>
    </div>
  )
}

export default NotFound