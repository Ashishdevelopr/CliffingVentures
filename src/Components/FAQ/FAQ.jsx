import React from 'react'
import "./FAQ.css"
import Question from "../../assets/Question.svg"

const FAQ = () => {
  return (
    <div id="question" className='reveal faq-background'>
      <div className='container-lg row-cols text-center '>
                    <div className='col-md-12 py-5 px-2 px-md-5  mb-4 mx-2'>
                        <h5 className='page-title'>Get Answers</h5>
                        <h2 className="lh-1 page-subtitle display-5 fw-bold d-flex justify-content-center ">Frequently Asked Questions</h2>
                        <p className='page-title-desc d-flex justify-content-center'>Answers to common questions about our services and processes, helping customers find quick solutions to their queries.</p>
                    </div>
                </div>

      {/* question section */}
      <section className="mt-0 mb-5">
    <div className="container-lg">
        <div className="row mx-2">
            <div className="col-md-7">
                <div className="accordion accordion-flush" id="faqlist">
                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            How many returns can I expect from the market?</button>
                        </h2>
                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            The returns from the market are variable and depend on factors like market conditions, investment strategy, and risk tolerance. Historically,
                             the average annual return for the stock market is around 7–10%. However, individual results may vary. Diversifying investments and maintaining
                              a long-term perspective can enhance the potential for favorable returns.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            Can I become a millionaire by investing in stocks?
                            </button>
                        </h2>
                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                            Investing in stocks carries the potential for wealth accumulation, but becoming a millionaire depends on various factors like the amount invested, 
                            market performance, and time. While stocks offer growth opportunities, it's crucial to adopt a diversified and long-term strategy. Individual results may
                            vary based on market conditions and investment decisions.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            Why is it important to diversify beyond stocks and bonds?
                            </button>
                        </h2>
                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                            Diversifying beyond stocks and bonds is vital to manage risk. Different assets respond differently to market changes. A diverse portfolio
                            balances risk, enhancing stability against market fluctuations.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                            How will my portfolio be impacted by inflation?
                            </button>
                        </h2>
                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                           Inflation erodes purchasing power over time. Your portfolio may be impacted as the real value of money decreases. Diversifying into inflation-resistant assets 
                           like real estate or commodities can help mitigate its effects.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item questions-border">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                            What’s the Next Step for Your Diversification?
                            </button>
                        </h2>
                        <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body onest-medium">
                           Consider diversifying into different asset classes, such as real estate, commodities, or international markets. 
                           Evaluate your risk tolerance and financial goals to determine the best mix. Regularly review and adjust your portfolio to align with changing market 
                           conditions and personal objectives. Seeking professional advice can be beneficial.
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