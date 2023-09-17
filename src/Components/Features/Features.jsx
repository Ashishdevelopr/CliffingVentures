import React from 'react';
import './Features.css';

const Features = () => {
  const FeatureArray = [
    {
      title: 'Dual Expertise',
      desc: 'Benefit from our combined financial and real estate knowledge, ensuring comprehensive solutions for your financial goals and property needs.',
      icon: 'fa-solid fa-house',
    },
    {
      title: 'Tailored Solutions',
      desc: 'Receive personalized financial plans and real estate strategies, uniquely crafted to align with your aspirations and circumstances',
      icon: 'fa-solid fa-flask',
    },
    {
      title: 'Market Insights',
      desc: 'Stay ahead with our expert market analysis, offering valuable trends and updates to inform your financial and real estate decisions.',
      icon: 'fa-solid fa-chart-pie',
    },
    {
      title: 'Effortless Mortgages',
      desc: 'Secure your dream property hassle-free, thanks to our competitive mortgage rates and streamlined application process.',
      icon: 'fa-solid fa-house-circle-check',
    },
    {
      title: 'Diversified Investments',
      desc: 'Optimize your portfolio by diversifying into real estate, enhancing your financial stability and growth potential.',
      icon: 'fa-solid fa-chart-bar',
    },
    {
      title: 'One-Stop Shop',
      desc: 'Access a complete range of services under a single roof, from financial planning to real estate, for a seamless and efficient experience.',
      icon: 'fa-solid fa-cart-shopping',
    },
  ];

  return (
    <div>
      <div className='container-lg col-xxl-8'>
        <div className='row'>
          <div className='col-md-12 px-5 py-5 my-5 mx-auto text-center'>
            <h5 className='page-title'>Our Features</h5>
            <h2 className='lh-1 display-5 fw-bold d-flex justify-content-center'>Explore Our Uniqueness</h2>
            <p className='d-flex justify-content-center '>Our Extraordinary Array of Unique and Innovative Features Set Us Apart from the Rest.</p>
          </div>
        </div>

        <div className='row'>
          {FeatureArray.map((data, id) => (
            <div className='col-md-4 mb-4' key={id}>
              <div className='card features-card'>
                <div className='card-body'>
                  <i className={`${data.icon} features-icon`}></i>
                  <h5 className='card-title fs-4 fw-bold'>{data.title}</h5>
                  <p className='card-text'>{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
