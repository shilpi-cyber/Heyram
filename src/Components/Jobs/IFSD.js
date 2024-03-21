import React from 'react'
import './JobFs.css'


function IFSD() {
    return <>
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-12 text-center job-title-card'>
                    <div style={{ fontSize: "1.5rem" }} className='pt-3 pb-3 company-title'>
                        HeyRam Infrastructure | Full Time
                    </div>
                    <div className='h1 pt-3 pb-3'>
                        Full Stack Developer
                    </div>
                    <div className='d-flex justify-content-center buttons'>
                        <div style={{ fontWeight: "350" }} >
                            SHARE IT TO
                        </div>
                    </div>
                    <div className='icons'>
                        <a href="" rel="noreferrer noopener" target='_blank'><i style={{ color: "blue" }} class="fa-brands ps-2 pe-2 fa-3x fa-facebook"></i></a>
                        <a href="" rel="noreferrer noopener" target='_blank'><i style={{ color: "black" }} class="fa-brands ps-2 pe-2 fa-3x fa-x-twitter"></i></a>
                        <a href="" rel="noreferrer noopener" target='_blank'><i class="fa-brands ps-2 pe-2 fa-3x fa-linkedin"></i></a>
                        <a href="" rel="noreferrer noopener" target='_blank'><i style={{ color: "green" }} class="fa-brands p-2 fa-3x fa-whatsapp"></i></a>
                        <a href="" rel="noreferrer noopener" target='_blank'><i class="fa-brands ps-2 pe-2 fa-3x fa-telegram"></i></a>
                    </div>
                </div>
            </div>
            <div className='row pt-5 ps-3 pe-3 pb-5'>
                <div className='col-md-8'>
                    <div className='h1 '>
                        Job Description
                    </div> <br />
                    <p className='pe-5 fs-5'><b className='fs-5'>Role Description:</b> We seek a talented and enthusiastic MERN Stack Developer to join our team. This
                        is a full-time on-site role where you will be responsible for developing, implementing, and
                        maintaining innovative software solutions for our clients. You will work closely with our
                        development team to deliver high-quality code and ensure client satisfaction.  </p>
                    <div className='roles-respond'>
                        <div className='h4'>
                            Responsibilities:
                        </div>
                        <ul>
                            <li className='fs-5'>
                                Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React,
                                Node.js)
                            </li>
                            <li className='fs-5'>
                                Collaborate with the design team to implement user-friendly interfaces
                            </li>
                            <li className='fs-5'>
                                Write clean, maintainable, and efficient code
                            </li>
                            <li className='fs-5'>
                                Troubleshoot and debug applications
                            </li>
                            <li className='fs-5'>
                                Perform code reviews and provide feedback to other developers
                            </li>
                            <li className='fs-5'>
                                Stay up-to-date with emerging technologies and best practices
                            </li>
                        </ul>
                    </div>
                    <div className='roles-respond'>
                        <div className='h4'>
                            Qualifications:
                        </div>
                        <ul>
                            <li className='fs-5'>
                                Bachelor's degree in Computer Science or a related field
                            </li>
                            <li className='fs-5'>
                                Proven experience as a MERN Stack Developer or similar role minimum experience of 2 years
                            </li>
                            <li className='fs-5'>
                                Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object
                                model
                            </li>
                            <li className='fs-5'>
                                Experience with React.js and Node.js
                            </li>
                            <li className='fs-5'>
                                Familiarity with MongoDB and database design principles
                            </li>
                            <li className='fs-5'>
                                Excellent problem-solving skills
                            </li>
                            <li className='fs-5'>
                                Ability to work independently and in a team environment
                            </li>
                            <li className='fs-5'>
                                Strong communication skills
                            </li>
                        </ul>
                    </div>
                    <div className='apply-button p-3'>
                        <div className='btn text-center p-2 btn-primary'>
                            APPLY NOW
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='h1 '>
                        Job Information
                    </div>
                    <div className='fs-5 pt-1 pb-1'>
                        Country
                    </div>
                    <div className='h5'>
                        India
                    </div> <br />
                    <div className='fs-5 pt-1 pb-1'>
                        Industry
                    </div>
                    <div className='h5'>
                        Technology
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default IFSD