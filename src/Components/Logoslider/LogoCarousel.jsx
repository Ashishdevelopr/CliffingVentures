import React, { useEffect } from 'react';
import "./Logo.css"

const LogoCarousel = () => {
  useEffect(() => {
    const originalLogos = document.querySelector('.logos-slide');
    const copy = originalLogos.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div >
        <div className="logos">
          <div className="logos-slide">
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/3m.svg" alt="Logo 1" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/barstool-store.svg" alt="Logo 2" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/budweiser.svg" alt="Logo 3" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/buzzfeed.svg" alt="Logo 4" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/forbes.svg" alt="Logo 5" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/macys.svg" alt="Logo 6" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/menshealth.svg" alt="Logo 7" />
            <img src="https://raw.githubusercontent.com/Coding-with-Robby/infinite-logo-carousel/adb1f11a3736ae0b1df43d48bbbb7c1339a77b86/logos/mrbeast.svg" alt="Logo 8" />
          </div>
        </div>
    </div>
  );
};

export default LogoCarousel;
