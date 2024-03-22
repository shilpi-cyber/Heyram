import React, { useContext, useEffect } from 'react'
import './css/Digital.css'
import { Link } from 'react-router-dom'
import DigitalCard from './Cards/DigitalCard'
import { DigitalData } from '../Context/DigitalServiceData'
import Zoom from 'react-reveal/Zoom';
import { motion } from 'framer-motion'

function Digital() {
    let CardData = useContext(DigitalData)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <>
        <motion.div className='container-fluid digital-page' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <section className='digital-heading d-flex justify-content-center align-items-center'>
                <div className='row '>
                    <div className='col-md-12 text-center digital-col'>
                        <div className='display-4 p-5'>DIGITAL SERVICES</div>
                    </div>
                    <div  className='col-md-8 text-center'>
                        <p className='digital-para'>Things are growing digitally quickly in the twenty-first century. Businesses are utilizing digital marketing to grow to new heights as traditional marketing is dying. A team of marketing experts at HeyRam Infrastructure, a perfect Tech startup agency in Chennai, India, analyzes your company, competitors, target market, products, and digital items to provide accurate analytics. Services offered include SEO, GOOGLE ADS (SEM), SOCIAL MEDIA MARKETING (SMM), and WEB DESIGN AND SOFTWARE DEVELOPMENT COMPANY. <br /><br />
                            One of the best Tech startup firms in Chennai, India, HEYRAM INFRASTRUCTURE, assists you in reaching your target audience at the appropriate moment. Our mission is to create digital solutions for small and medium-sized businesses (SME) in industries such as real estate, apparel, healthcare, education, food, beauty, gardening, and logistics.IT and Ecommerce services in Digital World. <br /><br /><br /></p>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://img.freepik.com/premium-photo/male-hand-touching-it-expert-business-internet-technology_220873-77.jpg" className='w-100' style={{ borderRadius: "10px" }} alt="digital-service" />
                    </div>
                    <div className='col-md-12 mt-5 text-center'>
                        <p style={{ fontSize: "1.3rem" }}>We help you transform your customer experiences and deliver them at a radically lower cost.</p>
                    </div>
                    <div className='col-md-12 text-center'>
                        <Link to='/enquiry-card'>
                            <button type="button" className='btn btn-light mb-5 enquiry-btn p-3  mt-5'>MAKE AN ENQUIRY &nbsp;<i class="fa-solid fa-arrow-right-long"></i></button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='digital-cards d-flex justify-content-center align-items-center'>
                <div className='row'>
                    {
                        CardData.data.map((e, i) => {
                            return <div className='col-md-4'>
                                <DigitalCard input={e} key={i} />
                            </div>
                        })
                    }
                </div>
            </section>
            <section className='section-digital d-flex justify-content-center align-items-center'>
                <div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <Zoom><div className='digital-para-head pt-5 pb-5'>
                                Looking for a top Startup Digital Service Company in Chennai? <br /> Consider HEYRAM INFRASTRUCTURE for your next project
                            </div></Zoom>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-8 text-center'>
                            <Zoom><p className='digital-para'>Our group of professionals is here to help you navigate the online environment. It is our understanding that having the ideal marketing strategy in addition to a well-designed and created website is essential for success in the online world.<br /><br />  It's similar to having the Best Digital Service Company in Chennai shining a bright spotlight on your company. <br /><br />
                                We are like digital geniuses here at HEYRAM INFRASTRUCTURE. We are fully aware of the strategies needed to elevate your company's internet presence. What we do is as follows: We start by getting to know your company, your website, the target audience, and your objectives.<br /><br /> We have the finest plan specifically for you based on all of that. Increasing the online visibility of your website is similar to making a treasure map.<br /><br />
                                All we care about is obtaining</p></Zoom>
                        </div>
                        <div className='col-md-4 text-center'>
                            <Zoom><img className='w-75 gif mb-5' src="https://cdn-jokon.nitrocdn.com/AwoEWBPBIgGShARSNTzFxrQfWkDFHrAw/assets/images/optimized/rev-7597a79/www.rankraze.com/wp-content/uploads/2019/11/videos.gif" alt="image1" /></Zoom>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Zoom><img className='w-100 t-rformula' src="https://cdn-jokon.nitrocdn.com/AwoEWBPBIgGShARSNTzFxrQfWkDFHrAw/assets/images/optimized/rev-7597a79/www.rankraze.com/wp-content/uploads/2023/10/REDEFINE-RELIABLE-REVOLUTIONIZE-01-scaled-e1708677948283-2048x1104.jpg" alt="3R formula" /></Zoom>
                        </div>
                        <div className='col-md-6 mb-5 d-flex justify-content-center align-items-center'>
                            <Zoom><div className='display-5'><i className="fa-solid fa-arrow-left"></i>OUR 3R FORMULA</div></Zoom>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    </>
}

export default Digital