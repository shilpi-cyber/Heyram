import React from 'react'
import './css/Crypto.css'
import Zoom from 'react-reveal/Zoom';
import { motion } from 'framer-motion'

function Crypto() {
    return <>


        <motion.div className='container-fluid crypto ' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className="row crypto-row">
                <div className='col-md-12 text-white text-center p-4 '>
                    <Zoom>
                        <div className='title display-5 p-3'>CRYPTO MINING SERVICES</div>
                        <div className='title p-3'>With our cryptocurrency mining services, you may mine cryptocurrencies faster and for less
                            money by sharing processing power from distant data centers instead of having to buy
                            expensive gear. The best reputable Cloud Mining websites are listed below, along with
                            important specifications, features, benefits, and downsides.</div>
                    </Zoom>

                    <Zoom>
                        <div className='text-paragrap'>
                            <p className='text-white'>HEYRAM INFRASTRUCTURE's strong and dependable wallet system protects your digital
                                valuables.</p>
                            <p className='text-white'>provides a range of flexible payment options to meet your individual budgetary needs.
                                Its worldwide reach is increased by its multilingual accessibility, which includes English,
                                French, Spanish, and Italian.
                                makes it possible to mine cryptocurrency without expensive hardware.
                                simplified registration procedure for convenience of use.
                                attractive interest rates on deposits—up to 12%—are offered.
                                Easy-to-use and intuitive platform interface for seamless navigation.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <Zoom><img className='crypto-image w-50' src="https://t4.ftcdn.net/jpg/04/49/30/43/360_F_449304397_uu4Yn3OwjliamDZOJeDOWaX81GT8ttvH.jpg" alt="cryto" /></Zoom>
                </div>
            </div>
        </motion.div>
    </>
}

export default Crypto