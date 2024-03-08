import React, { useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';
import './css/Genz.css'

function Genz() {
    useEffect(() => {
        document.title = "Gen-Z AI"
    }, [])
    return <>
        <div className='container-fluid  genz'>
            <div className='row gen-zz'>
                <div className='col-md-12 text-center'>
                    <Zoom><div>
                        <div className='title text-white  display-6'>
                            Introducing Gen Z AI
                        </div><br />
                        <p className='text-white'>Gen Z AI is an intelligent automation tool designed to streamline your workflow and free up your valuable time. <br /> It's more than just an automation AI; it's your adaptive assistant that learns from your examples and automates <br /> repetitive tasks with increasing efficiency over time.</p>
                    </div></Zoom><br /><br />
                    <Zoom>
                        <div className='d-flex justify-content-center'>
                            <div>
                                <div className='title text-white display-6'>
                                    Here's how Gen Z AI empowers you
                                </div><br />
                                <p className='text-white '><b>Intuitive interface </b>: No coding required! Simply demonstrate the task you want automated, and Gen Z AI will watch and learn.</p>
                                <p className='text-white '><b>Adaptive automation </b>: Gen Z AI continuously improves its understanding of your needs, refining its automation to become more accurate and efficient over time.</p>
                                <p className='text-white '><b>Increased productivity </b> : Reclaim valuable hours by offloading repetitive tasks to Gen Z AI, allowing you to focus on higher-level work and creative endeavors.</p>
                                <p className='text-white '><b>Customizable workflows </b>: Tailor Gen Z AI to your specific needs by creating unique automation triggers and customized outputs.</p>
                            </div>
                        </div>
                    </Zoom><br /><br />
                    <Zoom> <div>
                        <div className='title text-white display-6'>
                            Gen Z AI is ideal for:
                        </div><br />
                        <p className='text-white'><b>Busy professionals</b>: Automate administrative tasks, data entry, scheduling, and more.</p>
                        <p className='text-white'><b>Students</b> :Streamline research, writing assignments, and content creation.</p>
                        <p className='text-white'><b>Content creators :</b>: Automate repetitive editing tasks, social media posting, and audience engagement.</p>
                        <p className='text-white'><b>Anyone seeking to optimize their workflow</b> : Gen Z AI is a versatile tool that can benefit everyone who desires increased efficiency and time management.
                            Experience the future of automation with Gen Z AI. Unleash your potential and achieve more!</p>
                    </div>
                    </Zoom>
                </div>
            </div>
        </div>
    </>
}

export default Genz