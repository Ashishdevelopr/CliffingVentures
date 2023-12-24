import React from 'react'
import serviceBroking1 from "../../../assets/serviceBroking1.svg"
import serviceBroking2 from "../../../assets/serviceBroking2.svg"

const BrokingAdvisory = () => {
  return (
    <div>
      <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-5 fw-bold text-white">Broking and Advisory</h1>
          <p className="my-3 text-white">
            Our financial broking firms facilitate trading of various instruments. Full-service brokers provide comprehensive services, while discount brokers offer cost-effective options. Research, fees, and reputation.</p>
        </div>
      </div>


      <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
        <div className="row flex-lg-row align-items-center">
          <div className="col-lg-8">
            <h1 className="fs-3 fw-bold text-body-emphasis align-center lh-sm mb-3">
              Financial Broking Firm
            </h1>

            <p className="fw-normal lh-base">
              A financial broking firm is a financial institution that acts as an intermediary between buyers and sellers of financial instruments, such as stocks, bonds, commodities, and derivatives. Financial broking firms can be either full-service or discount brokers.
            </p>
            <p className="fw-normal lh-base">
              Full-service brokers offer a wide range of services, including investment advice, portfolio management, and research from Angel One research. They typically charge higher fees than discount brokers, but they can be a good option for investors who need help making investment decisions.
            </p>
            <p className="fw-normal lh-base">
              Discount brokers offer a more limited range of services, but they typically charge lower fees than full-service brokers. Discount brokers are a good option for investors who are comfortable making their own investment decisions.
            </p>
            <p className="fw-normal lh-base">
              Financial broking firms play an important role in the financial markets. They help to ensure that buyers and sellers can easily trade financial instruments and that prices are fair and efficient.
            </p>
          </div>
          <div className="col-12 col-sm-11 col-lg-4 mx-auto">
            <img src={serviceBroking1} className="img-fluid" width="120%" height="150%" />
          </div>
        </div>
      </div>

      <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
        <div className="row flex-lg-row align-items-center">

          <div className="col-lg-12">
            <h2 className="fs-4 fw-bold text-body-emphasis align-center lh-sm mb-3">
              Benefits of Using a Financial Broking Firm
            </h2>

            <ul>
              <li className='fs-6'>
                <strong>Access to a wide range of financial instruments:</strong> Financial broking firms offer access to a wide range of financial instruments, including stocks, bonds, commodities, and derivatives. This allows investors to diversify their portfolios and invest in the assets that they believe have the potential to generate the highest returns.
              </li>
              <li className='fs-6'>
                <strong>Professional advice and guidance:</strong> Financial broking firms can provide investors with professional advice and guidance on investment strategies and risk management. This can be particularly helpful for investors who are new to the market or who do not have the time or expertise to make their own investment decisions.
              </li>
              <li className='fs-6'>
                <strong>Convenience:</strong> Financial broking firms make it easy for investors to trade financial instruments. Investors can place trades online, over the phone, or through a mobile app.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
        <div className="row flex-lg-row align-items-center">
          <div className="col-12 col-sm-11 col-lg-4 mx-auto">
            <img src={serviceBroking2} className="img-fluid" width="120%" height="150%" />
          </div>
          <div className="col-lg-8">
            <h2 className="fs-4 fw-bold text-body-emphasis align-center lh-sm mb-3">
              Things to Consider When Choosing a Financial Broking Firm
            </h2>
            <ul>
              <li className='fs-6'>
                <strong>Fees:</strong> Financial broking firms charge different fees for their services. It is important to compare the fees charged by different firms before making a decision.
              </li>
              <li className='fs-6'>
                <strong>Services:</strong> Financial broking firms offer a variety of services, such as investment advice, portfolio management, and research. It is important to choose a firm that offers the services that you need and want.
              </li>
              <li className='fs-6'>
                <strong>Reputation:</strong> It is important to choose a financial broking firm with a good reputation. You can read online reviews and check with the Securities and Exchange Commission (SEC) to see if the firm has any disciplinary history.
              </li>
            </ul>
            <p className="fw-normal lh-base">
              If you are considering using a financial broking firm, it is important to do your research and to choose a firm that is right for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrokingAdvisory