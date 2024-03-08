import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

function Footer() {
    return <>
        <div className='container-fluid'>
            <div className='row text-center bg-dark text-white'>
                <Zoom>
                    <div className='col-md-4 p-3'>
                        <div>
                            ©2024 All rights reserved
                        </div>
                    </div>
                </Zoom>
                <Zoom><div className='col-md-4 p-3'>
                    <Link style={{ "textDecoration": "none", "color": "white" }} >
                        PRIVACY POLICY
                    </Link>
                </div>
                </Zoom>
                <Zoom>
                    <div className='col-md-4 p-3'>
                        Designed and Developed By <Link to='/home' style={{ "textDecoration": "none", "color": "white" }}><b>HEYRAM INFRASTRUCTURE</b></Link>
                    </div>
                </Zoom>
            </div>
        </div>
    </>
}

export default Footer