import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Service2 from './Components/Services/Service2'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Contacts from './Components/Contact/Contact'
import FAQ from './Components/FAQ/FAQ'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailedAbout from './Components/About/DetailedAbout'
import DetailedTeam from './Components/Team/DetailedTeam'
import DetailedContact from './Components/Contact/DetailedContact'
import ScrollTop from './Components/UtilityPages/ScrollTop'
import NotFound from './Components/UtilityPages/NotFound'

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
              <Service2 />
              <About />
              {/* <AboutImage/> */}
              <Features />
              <Team />
              <Contacts />
              <FAQ />
              
            </>}></Route>

            {/* About Route */}
            <Route path='/about-us' element={<DetailedAbout/>}/>

            {/* Team Route */}
            <Route path='/team-members' element={<DetailedTeam/>}/>

            {/* Team Route */}
            <Route path='/contact-us' element={<DetailedContact/>}/>

            {/* Team Route */}
            <Route path='/*' element={<NotFound/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  )
}

export default App
