import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Homepage from './Components/Homepage'
import Genz from './Components/Genz'
import AWS from './Components/AWS'
import Footer from './Components/Footer'
import ServiceContext from './Context/ServiceContext'
import Crypto from './Components/Crypto'
import Digital from './Components/Digital'
import Agriculture from './Components/Agriculture'

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<ServiceContext>
          <Homepage />
        </ServiceContext>} />
        <Route path="/genz" element={<Genz />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/aws" element={<AWS />} />
        {/* <Route path='/nav' element={<NavBar />} /> */}
        <Route path='/crypto' element={<Crypto/>} />
        <Route path='/agriculture' element={<Agriculture/>} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  </>
}

export default App
