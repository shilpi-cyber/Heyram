import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Homepage from './Components/Homepage'
import Genz from './Components/Genz'
import AWS from './Components/AWS'
import Footer from './Components/Footer'
import ServiceContext from './Context/ServiceContext'
import Crypto from './Components/Crypto'
import Agriculture from './Components/Agriculture'
// import AniCursor from './Components/AniCursor'

function App() {
  return <>
    <BrowserRouter>
      {/* <div className='container-fluid'> */}
      {/* <AniCursor/> */}
      <NavBar />
      <Routes>
        <Route path="/home" element={<ServiceContext>
          <Homepage />
        </ServiceContext>} />
        <Route path="/genz" element={<Genz />} />
        <Route path="/cloud-services" element={<AWS />} />
        {/* <Route path='/nav' element={<NavBar />} /> */}
        <Route path='/crypto-mining' element={<Crypto/>} />
        <Route path='/agriculture' element={<Agriculture/>} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  </>
}

export default App