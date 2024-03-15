import React, { useContext, useEffect } from 'react'
import './css/Agriculture.css'
import ACard from './Cards/ACard'
import { AgriData } from '../Context/AgricultureData'
import Zoom from 'react-reveal/Zoom';
import { motion } from 'framer-motion'

function Agriculture() {
    useEffect(() => {
        document.title = "Agriculture Services"
        window.scrollTo(0, 0)
    }, [])
    let aData = useContext(AgriData)
    return <>
        <motion.div className='container-fluid agri' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className='row pb-5 agri-row'>
                <Zoom><div className='col-md-12  text-center d-flex justify-content-center align-items-center'>
                    <div>
                        <div className='agriculture-header text-white mb-5 display-5'>
                            AGRICULTURE SERVICES
                        </div>
                        <p className='text-white'>HeyRam infrastructure works in partnership with government-funded extension service agents (EAs) in India to give farmers access to vital data and resources.<br /><br />
                            We provide EAs with training on how to leverage affordable, scalable technologies to improve the effectiveness, efficiency, and impact of their work in rural communities. <br /><br />
                            To increase the value of their harvests, this strategy aids rural farmers in gaining access to and disseminating locally pertinent information.<br /><br />
                            By creating our products with inclusivity and climate resilience in mind, we hope to expand on our achievements and give millions more EAs and small-scale farmers the resources they require to better their communities and quality of life.</p>
                    </div>
                </div></Zoom>
            </div>
            <div className='row m-5'>
                <Zoom><div className='col-md-8 text-start ps-5 '>
                    <p className='text-white '>We are producers and explorers bringing you the best-of-the-best in native honey, walnuts, almonds, kesar saffron, and other delicacies. <br /><br />
                        Every product that makes it into the top 10% of the harvest each year is carefully sorted.</p>
                </div></Zoom>
                <Zoom><div className='col-md-4 text-center '>
                    <img className='w-75 agri-img' src="https://media.istockphoto.com/id/1402281575/photo/bowls-of-oatmeal-with-mixed-fruits-topping.webp?b=1&s=170667a&w=0&k=20&c=TzW3OMMY5ynf6-CCcZX2ef7CbsCLyaLA79VDTi_j-D8=" style={{ borderRadius: "20px" }} alt="" />
                </div></Zoom>
            </div>
            <div className='row'>
                <Zoom><div className='col-md-12 text-center'>
                    <div className='h1 p-5 text-white'>
                        CATEGORIES
                    </div>
                </div></Zoom>
                {
                    aData.data.map((e, i) => {
                        return <Zoom><div className='col-md-4'>
                            <ACard input={e} key={i} />
                        </div></Zoom>
                    })
                }
            </div>
        </motion.div>
    </>
}

export default Agriculture