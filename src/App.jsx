import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Contacts from './Components/Contact/Contact'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailedAbout from './Components/About/DetailedAbout'
import DetailedContact from './Components/Contact/DetailedContact'
import ScrollTop from './Components/UtilityPages/ScrollTop'
import NotFound from './Components/UtilityPages/NotFound'
import LogoCarousel from './Components/Logoslider/LogoCarousel'
import Service from './Components/Services/Service'
import BrokingAdvisory from './Components/Services/DetailedServices/BrokingAdvisory'
import Led from './Components/Services/DetailedServices/Led'
import RealEstate from './Components/Services/DetailedServices/RealEstate'
import Finance from './Components/Services/DetailedServices/Finance'


function App() {

  return (
    <div>
      <BrowserRouter>
      <ScrollTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <LogoCarousel/>
              <Service/>
              <About />
              <Features />
              <Contacts />
              <FAQ />
              
            </>}></Route>

            {/* About Route */}
            <Route path='/about-us' element={<DetailedAbout/>}/>

            {/* Team Route */}
            <Route path='/contact-us' element={<DetailedContact/>}/>

            {/* LED Manufacturing */}
            <Route path='/led-manufacturing' element={<Led/>}/>

            {/* Finance */}
            <Route path='/finance-education' element={<Finance/>}/>

            {/* Real Estate */}
            <Route path='/real-estate' element={<RealEstate/>}/>

            {/* Broking */}
            <Route path='/broking-advisory' element={<BrokingAdvisory/>}/>

            {/* Team Route */}
            <Route path='/*' element={<NotFound/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  )
}

export default App
