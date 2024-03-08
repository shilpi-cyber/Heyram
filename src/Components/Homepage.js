import React, { useContext, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import './css/Homepage.css'
import { serviceContextData } from '../Context/ServiceContext';
import Hcard from './Hcard';
function Homepage() {
    useEffect(() => {
        document.title = "Welcome to HeyRam Infrastructure-Homepage"
    }, [])
    let service = useContext(serviceContextData)
    return <>
            <div className='container-fluid home '>
                <div className='row text-center gen-z  '>
                    <div className='col-md-12 d-flex justify-content-center'>
                        <div className='card-home'>
                            {/* <img className='w-100 ai-image' src="" alt="ai"/> */}
                            <Zoom><div className=' text-white title pt-4 pb-4 '>HEYRAM INFRASTRUCTURE PRESENTS</div></Zoom>
                            <Zoom><h1 className='text-white title-gen display-1 pt-4 pb-4'>GEN-<span className='z display-1'>Z</span> AI</h1></Zoom>
                            <Zoom><p className='text-white  titl-p p-3'>Explore a World of Innovation, Quality and Excellence in Every Project.Let's Build the Future Together</p></Zoom>
                            <Zoom><Link to='/genz'><button className='btn bg-dark dark text-white w-50  m2-5 p-3  ' >DISCOVER NOW</button></Link></Zoom>
                        </div>
                    </div>
                </div>
                <div className='row text-center digital-row p-4 '>
                    <div className='col-md-12 d-flex justify-content-center'>
                        <div className='card-dig'>
                            <Zoom><h1 className='text-white title-gen display-1'>DIGITAL SERVICES</h1></Zoom>
                            <Zoom><p className='text-white title titl-p p-3'>Start Your Empowering Digital Journeys With Us</p></Zoom>
                            <Zoom><Link to='/genz'><button className='btn bg-dark dark text-white w-50 mt-5 p-3  ' >DISCOVER NOW</button></Link></Zoom>
                        </div>
                    </div>
                </div>
                <div className='row text-center text-white digital-services pb-5'>
                    <div className='card-d p-5'>
                        <Zoom><div className='explore'>EXPLORE FURTHER</div></Zoom>
                        <Zoom><div className=''>CONTINUE YOUR JOURNEY</div></Zoom>
                    </div>{
                        service.data.map((e, i) => {
                            return <div className='col-md-4'>
                                <Hcard input={e} key={i} />
                            </div>
                        })
                    }
                </div>
            </div>
    </>
}

export default Homepage