import React from 'react'
import "./FAQ.css"
import Question from "../../assets/Question.svg"

const FAQ = () => {
  return (
    <div id="question" className='reveal faq-background'>
      <div className='row'>
                    <div className='col-md-12 py-5 mb-4'>
                        <h5 className='page-title'>Get Answers</h5>
                        <h2 className="lh-1 page-subtitle display-5 fw-bold d-flex justify-content-center ">Frequently Asked Questions</h2>
                        <p className='page-title-desc d-flex justify-content-center'>Answers to common questions about our services and processes, helping customers find quick solutions to their queries.</p>
                    </div>
                </div>

      {/* question section */}
      <section className="mt-0 mb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <div className="accordion accordion-flush" id="faqlist">
                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            What is your web development process?</button>
                        </h2>
                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            Our web development process involves discovery, planning, design, development, testing, and deployment. We work closely with our clients
                             to ensure that we understand their unique needs and goals, and we use an agile methodology to deliver custom web solutions that meet those 
                             needs.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            Will my website be mobile-friendly and responsive?
                            </button>
                        </h2>
                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                            Yes, our agency design and develop websites that are mobile-friendly and responsive, meaning they can adapt to different screen sizes
                             and devices. This is important for providing a seamless user experience and ensuring the website is accessible to a wider audience.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            Will my website be search engine optimized?
                            </button>
                        </h2>
                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                            Yes, we follow best practices for search engine optimization (SEO) in all of our web development projects, ensuring that your website is
                             optimized for search engines and has the best possible chance of ranking well in search results.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                            Can you assist with domain registration and hosting?
                            </button>
                        </h2>
                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                            Yes, we offer domain registration services and can help you choose the right domain name for your business. We also provide hosting solutions to ensure your website is securely stored and accessible online.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                            What if I need additional features or functionality in the future?
                            </button>
                        </h2>
                        <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                            Our websites are built to be scalable and expandable. If you require additional features or functionality in the future, we can discuss your needs and provide solutions to enhance your website’s capabilities, ensuring it evolves alongside your business.
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-12 col-sm-11 col-lg-5 mx-auto">
                        <div className=''>
                            <img src={Question} className="img-fluid" width="120%" height="150%" />
                        </div>
                    </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default FAQ