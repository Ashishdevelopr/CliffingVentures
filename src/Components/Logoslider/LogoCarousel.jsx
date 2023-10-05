import React, { useEffect } from 'react';
import "./Logo.css"
import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider2.png"
import slider3 from "../../assets/slider3.png"
import slider4 from "../../assets/slider4.png"
import slider5 from "../../assets/slider5.png"

const LogoCarousel = () => {
  useEffect(() => {
    const originalLogos = document.querySelector('.logos-slide');
    const copy = originalLogos.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div >
        <div className="logos">
          <div className='slider-title'>Our Partners: </div>
          <div className="logos-slide">
            <img src={slider1} alt="Logo 1" />
            <img src={slider2} alt="Logo 1" />
            <img src={slider3} alt="Logo 1" />
            <img src={slider4} alt="Logo 1" />
            <img src={slider5} alt="Logo 1" />
          </div>
        </div>
    </div>
  );
};

export default LogoCarousel;
