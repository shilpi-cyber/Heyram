import React, { useEffect } from 'react'
import './css/Aws.css'
import Fade from 'react-reveal/Fade';

function Crypto() {
    useEffect(() => {
        document.title = "Crypto Mining"
    }, [])

    return <>
        <div className='container-fluid crp'>
            <div className="row crp-row">
                <div className='col-md-12 text-white text-center p-4 '>
                    <Fade>
                        <h1>Crypto Mining Services</h1>
                        <div className='title display-5 p-3'>With our cryptocurrency mining services, you may mine cryptocurrencies faster and for less
money by sharing processing power from distant data centers instead of having to buy
expensive gear. The best reputable Cloud Mining websites are listed below, along with
important specifications, features, benefits, and downsides. </div>
                    </Fade>
                    <div className='crp-content'>
                    <div className='title display-6 p-3 text-white'>
                            Here's what makes us stand out
                        </div>
                        <Fade>
                            <p className='text-white'>

                            HEYRAMINFRASTRUCTURE's strong and dependable wallet system protects your digital
valuables.
provides a range of flexible payment options to meet your individual budgetary needs.
Its worldwide reach is increased by its multilingual accessibility, which includes English,
French, Spanish, and Italian.
makes it possible to mine cryptocurrency without expensive hardware.
simplified registration procedure for convenience of use.
attractive interest rates on deposits—up to 12%—are offered.
Easy-to-use and intuitive platform interface for seamless navigation. 
</p>
                        </Fade>
                    </div>
                </div>
                <div className='col-md-12'>
                    <Fade>
                        <div className='title display-6 p-3 text-white'>
                            
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </>
}

export default Crypto