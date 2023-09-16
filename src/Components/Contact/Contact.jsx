import React from 'react'
import "./Contact.css"

const Contacts = () => {
    return (
        <div className='contact-back'>
            <div className='container col-xxl-8 px-2 mb-5 py-5'>
                <div className='row'>
                    <div className='col-md-12 py-5'>
                        <h5 className='page-title'>Contact Us</h5>
                        <h2 className="lh-1 display-5 fw-bold d-flex justify-content-center ">We're Here to Help</h2>
                        <p className='d-flex justify-content-center'>Our Extraordinary Array of Unique and Innovative Features Set Us Apart from the Rest.</p>
                    </div>
                </div>



            <div className="container mt-4 mb-4 ">
                <div className="row flex-lg align-items-center g-5 py-0">

                    <div className="col-md-6 col-sm-12 col-lg-6 mx-auto ">
                        <section className='form-section'>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="John Hunt" required />
                                <label for="floatingInput">Full name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword" maxLength={10} placeholder="  " required />
                                <label for="floatingPassword">Phone number</label>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="validationTextarea floatingInput" required placeholder=" "></textarea>
                                <label for="floatingInput">Message</label>
                            </div>

                            <button class="btn contact-btn px-3 py-2 d-grid btn-lg col-12 mx-auto" type="submit">Submit form</button>
                        </section>
                    </div>



                    <div className="col-md-5 col-sm-12 col-lg-5 mx-auto d-none d-md-block">


                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d468.50724808513496!2d72.83345001514037!3d19.177305525658255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzM4LjIiTiA3MsKwNTAnMDEuNSJF!5e0!3m2!1sen!2sin!4v1676630831480!5m2!1sen!2sin"
                            style={{ width: "400px", height: "400px", allowfullscreen: "" }}></iframe>
                    </div>

                </div>
            </div>
            </div>

        </div>
    )
}

export default Contacts