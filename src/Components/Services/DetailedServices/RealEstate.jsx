import React from 'react'
import serviceEstate1 from "../../../assets/serviceEstate1.svg"
import serviceEstate2 from "../../../assets/serviceEstate2.svg"

const RealEstate = () => {
  return (
    <div>
      <div className="p-4 p-md-5 mb-5 text-body-emphasis detailed-main-bg">
        <div className="col-lg-6 px-0 align-text-center">
          <h1 className="display-4 fw-bold text-white">Real Estate</h1>
          <p className="my-3 text-white">We offer services for differing sort real estate transactions like private and commercial. We at Cliffing Venture  incorporates professional strategies to cater to our client and according to their requirements.</p>
        </div>
      </div>

      <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
      <div className="row flex-lg-row align-items-center">
        <div className="col-lg-12">
          <h1 className="fs-2 fw-bold text-body-emphasis align-center lh-sm mb-3">
            5 Simple Ways to Invest in Real Estate
          </h1>
          <p className="fw-normal lh-base">
            At Cliffing Venture, we specialize in diverse real estate transactions, encompassing both private and commercial sectors. Our dedicated team employs professional strategies tailored to meet the unique needs of each client. We prioritize delivering exceptional service, ensuring a seamless experience for our clients in accordance with their specific requirements.
          </p>
          <p className="fw-normal lh-base">
            Here's how - from buying rental property and more.
          </p>
        </div>
        
      </div>
    </div>
    <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
      <div className="row flex-lg-row align-items-center">
        <div className="col-lg-8">
          <h1 className="fs-2 fw-bold text-body-emphasis align-center lh-sm mb-3">
            Buying Rental Property - The Oldest and Most Basic Way in Real Estate
          </h1>
          <p className="fw-normal lh-base">
            When looking for investment options, there are many choices for where to put your money. Stocks, bonds, exchange-traded funds, mutual funds, and real estate are all good investments no matter what level of experience you have; forex or cryptocurrency may be too volatile for beginning investors. Which option you choose will depend on how involved you want to be in your investment, how much money you have to start investing, and how much risk you are comfortable taking on.
          </p>
          <p className="fw-normal lh-base">
            Buying and owning real estate is an investment strategy that can be both satisfying and lucrative. Unlike stock and bond investors, prospective real estate owners can use leverage to buy a property by paying a portion of the total cost upfront, then paying off the balance, plus interest, over time.
          </p>
        </div>
        <div className="col-12 col-sm-11 col-lg-4 mx-auto">
            <img src={serviceEstate1} className="img-fluid" width="120%" height="150%" />
          </div>
      </div>
    </div>

    <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
      <div className="row flex-lg-row align-items-center">
        <div className="col-lg-12">
          <p className="fw-normal lh-base">
            What makes a good real estate investment? A good investment has a high chance of success or return on your investment. If your investment involves a high level of risk, that risk should be balanced out by a high possible reward. Even if you choose investments with a high probability of success, though, that isn't a guarantee. You shouldn't put money into real estate—or any other investment— if you cannot afford to lose that money.
          </p>
          <p className="fw-normal lh-base">
            Though a traditional mortgage generally requires a 20% to 25% down payment, in some cases, a 5% down payment is all it takes to purchase an entire property. This ability to control the asset the moment papers are signed emboldens both real estate flippers and landlords, who can, in turn, take out second mortgages on their homes in order to make down payments on additional properties.
          </p>
          <h2 className="fs-4 fw-bold text-body-emphasis align-center lh-sm mb-3">
            KEY TAKEAWAYS
          </h2>
          <ul>
            <li className="fs-6">
              Aspiring real estate owners can buy a property by using leverage, paying a portion of its total cost upfront, and paying off the balance over time.
            </li>
            <li className="fs-6">
              One of the primary ways in which investors can make money in real estate is to become the landlord of a rental property.
            </li>
            <li className="fs-6">
              People who are flippers, buying up undervalued real estate, fixing it up, and selling it, can also earn income.
            </li>
            <li className="fs-6">
              Real estate investment groups are a more hands-off way to make money in real estate.
            </li>
            <li className="fs-6">
              Real estate investment trusts are basically dividend-paying stocks.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='container-lg my-2 py-2 px-md-3 px-2 mx-auto'>
      <div className="row flex-lg-row align-items-center">
      <div className="col-12 col-sm-11 col-lg-4 mx-auto">
            <img src={serviceEstate2} className="img-fluid" width="120%" height="150%" />
          </div>
        <div className="col-lg-8">
        <h1 className="fs-2 fw-bold text-body-emphasis align-center lh-sm mb-3">
            Rental Properties
          </h1>
          
          <p className="fw-normal lh-base">
            Owning rental properties can be a great opportunity for individuals who have do-it-yourself (DIY) renovation skills and the patience to manage tenants. However, this strategy does require substantial capital to finance upfront maintenance costs and to cover vacant months.
          </p>
          <h2 className="fs-4 fw-bold text-body-emphasis align-center lh-sm mb-3">
            Pros
          </h2>
          <ul>
            <li className="fs-6">
              Provides regular income, and properties can appreciate.
            </li>
            <li className="fs-6">
              Maximizes capital through leverage.
            </li>
            <li className="fs-6">
              Many tax-deductible associated expenses.
            </li>
          </ul>
          <h2 className="fs-4 fw-bold text-body-emphasis align-center lh-sm mb-3">
            Cons
          </h2>
          <ul>
            <li className="fs-6">
              Managing tenants can be tedious.
            </li>
            <li className="fs-6">
              Potentially damage property from tenants.
            </li>
            <li className="fs-6">
              Reduced income from potential vacancies.
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default RealEstate