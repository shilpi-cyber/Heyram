import React, { useContext, useEffect} from 'react'
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
        <motion.div className='container-fluid homepage-container' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className='section row text-center gen-z '>
                <div className='col-md-12 card-home d-flex justify-content-center'>
                    <div data-aos='fade-up' data-aos-duration="1000" className='pt-4'>
                        {/* <img className='w-100 ai-image' src="" alt="ai"/> */}
                        <div className=' text-white title-heading pt-3 pb-4 '>HEYRAM INFRASTRUCTURE PRESENTS</div>
                        <h1 className='text-white title-gen display-1 pt-2 pb-2'>GEN-<span className='z display-1'>Z</span> AI</h1>
                        <p className='text-white  titl-p p-2'>Explore a World of Innovation, Quality and Excellence in Every Project.Let's Build the Future Together</p>
                        <Link to='/genz'><button className='btn btn-light home-btns mb-4  mt-3' >DISCOVER NOW &nbsp; <i class="fa-solid  fa-arrow-right-long"></i></button></Link>
                    </div>
                </div>
            </div>

            <div className='section row text-center pt-4 pb-4 digital-row '>
                <div className='col-md-12 d-flex justify-content-center'>
                    <div className='card-dig' data-aos='fade-up' data-aos-duration="1000" >
                        <h1 className='text-white title-gen display-1'>DIGITAL SERVICES</h1>
                        <p className='text-white title-p pt-5 pb-3'>Start Your Empowering Digital Journeys With Us</p>
                        <Link to='/digital-service'><button className='btn btn-light home-btns mt-5' >DISCOVER NOW &nbsp; <i class="fa-solid  fa-arrow-right-long"></i></button></Link>
                    </div>
                </div>
            </div>

            <section className='section digital-services d-flex justify-content-center align-items-center'>
                <div className='row text-center  pb-5 text-white digital-services'>
                    <div className='card-d  pb-5' data-aos='fade-up' data-aos-duration="1000" >
                        <div className='explore'>EXPLORE FURTHER</div>
                        <div >CONTINUE YOUR JOURNEY</div>
                    </div>
                    {
                        service.data.map((e, i) => {
                            return <div className='col-md-4' data-aos='fade-up' data-aos-duration="1000" >
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