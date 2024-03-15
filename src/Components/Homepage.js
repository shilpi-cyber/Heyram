import React, { useContext, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import './css/Homepage.css'
import { serviceContextData } from '../Context/ServiceContext';
import Hcard from './Hcard';
import { motion } from 'framer-motion'

function Homepage() {

    useEffect(() => {
        document.title = "Welcome to HeyRam Infrastructure-Homepage"
        window.scrollTo(0, 0)
    }, [])
    let service = useContext(serviceContextData)

    return <>
        <motion.div className='container-fluid' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
                <div className='section row text-center gen-z '>
                    <div className='col-md-12 card-home d-flex justify-content-center'>
                        <div className='pt-4'>
                            {/* <img className='w-100 ai-image' src="" alt="ai"/> */}
                            <Zoom><div className=' text-white title-heading pt-3 pb-5 '>HEYRAM INFRASTRUCTURE PRESENTS</div></Zoom>
                            <Zoom><h1 className='text-white title-gen display-1 pt-2 pb-2'>GEN-<span className='z display-1'>Z</span> AI</h1></Zoom>
                            <Zoom><p className='text-white  titl-p p-2'>Explore a World of Innovation, Quality and Excellence in Every Project.Let's Build the Future Together</p></Zoom>
                            <Zoom><Link to='/genz'><button className='btn btn-light p-3 m-4 mt-5' >DISCOVER NOW &nbsp; <i class="fa-solid  fa-arrow-right-long"></i></button></Link></Zoom>
                        </div>
                    </div>
                </div>

                <div className='section row text-center p-4 digital-row '>
                    <div className='col-md-12 d-flex justify-content-center'>
                        <div className='card-dig'>
                            <Zoom><h1 className='text-white title-gen display-1'>DIGITAL SERVICES</h1></Zoom>
                            <Zoom><p className='text-white title-p p-3'>Start Your Empowering Digital Journeys With Us</p></Zoom>
                            <Zoom><Link to='/digital-service'><button className='btn btn-light p-3 m-4  mt-5' >DISCOVER NOW &nbsp; <i class="fa-solid  fa-arrow-right-long"></i></button></Link></Zoom>
                        </div>
                    </div>
                </div>

            <section className='digital-services d-flex justify-content-center align-items-center'>
                <div className='row text-center  pb-5 text-white digital-services'>
                    <div className='card-d p-5'>
                        <Zoom><div className='explore'>EXPLORE FURTHER</div></Zoom>
                        <Zoom><div >CONTINUE YOUR JOURNEY</div></Zoom>
                    </div>
                    {
                        service.data.map((e, i) => {
                            return <div className='col-md-4'>
                                <Hcard input={e} key={i} />
                            </div>
                        })
                    }
                </div>
            </section>

        </motion.div>
    </>
}

export default Homepage