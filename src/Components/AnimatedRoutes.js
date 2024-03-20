import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Homepage from './Homepage'
import Genz from './Genz'
import AWS from './AWS'
import Crypto from './Crypto'
import Digital from './Digital'
import Agriculture from './Agriculture'
import ContactCard from './ContactCard'
import ServiceContext from '../Context/ServiceContext'
import DigitalServiceData from '../Context/DigitalServiceData'
import AgricultureData from '../Context/AgricultureData'
import { AnimatePresence } from 'framer-motion'
import About from './About'
import Career from './Career'
import Jobs from './Jobs'
import JobContext from '../Context/JobContext'
import Intership from './Intership'
import IntershipData from '../Context/IntershipData'
import Wd from './Intern/WD'
import FA from './Intern/FA'
import AD from './Intern/AD'
import CS from './Intern/CS'
import AI from './Intern/AI'
import DM from './Intern/DM'

function AnimatedRoutes() {
    const location = useLocation()

    return <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<ServiceContext>
                    <Homepage />
                </ServiceContext>} />
                <Route path="/genz" element={<Genz />} />
                <Route path="/cloud-services" element={<AWS />} />
                <Route path='/about' element={<About />} />
                <Route path='/career' element={<Career />} />
                <Route path='/jobs' element={
                    <JobContext>
                        <Jobs />
                    </JobContext>
                } />
                <Route path='/internship' element={
                    <IntershipData>
                        <Intership />
                    </IntershipData>
                } />
                <Route path='/internship/web-developer-intern' element={<Wd />} />
                <Route path='/internship/app-developer-intern' element={<AD />} />
                <Route path='/internship/ai-developer-intern' element={<AI />} />
                <Route path='/internship/cloud-intern' element={<CS />} />
                <Route path='/internship/digital-marketing-intern' element={<DM />} />
                <Route path='/internship/financial-analyst-intern' element={<FA />} />
                <Route path='/digital-service' element={
                    <DigitalServiceData>
                        <Digital />
                    </DigitalServiceData>
                } />
                {/* <Route path='/nav' element={<NavBar />} /> */}
                <Route path='/crypto-mining' element={<Crypto />} />
                <Route path='/enquiry-card' element={<ContactCard />} />
                <Route path='/agriculture' element={
                    <AgricultureData>
                        <Agriculture />
                    </AgricultureData>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </AnimatePresence>
    </>
}

export default AnimatedRoutes