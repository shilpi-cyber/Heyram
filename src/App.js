import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'
import AnimatedRoutes from './Components/AnimatedRoutes'
import Footer from './Components/Footer'

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <AnimatedRoutes/>
      <Footer />
    </BrowserRouter>
  </>
}

export default App