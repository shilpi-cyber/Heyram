import React from 'react'
// import './JobFs.css'

function DMJ() {
    return <>
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-12 text-center job-title-card'>
                    <div style={{ fontSize: "1.5rem" }} className='pt-3 pb-3 company-title'>
                        HeyRam Infrastructure | Full Time
                    </div>
                    <div className='h1 pt-3 pb-3'>
                        Digital Marketing
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
                    <p className='pe-5 fs-5'><b className='fs-5'>Role Description:</b>This is a full-time on-site role for a Digital Marketing Executive. The role involves developing,
                        implementing, and managing digital marketing campaigns for our clients. Responsibilities include
                        creating compelling content for websites and social media, overseeing social media accounts,
                        analyzing web traffic and user behavior, and optimizing campaigns to increase conversions. The
                        Digital Marketing Executive will work closely with the marketing team and report to the Marketing
                        Manager.</p>

                    <div className='roles-respond'>
                        <div className='h4'>
                            Qualifications:
                        </div>
                        <ul>
                            <li className='fs-5'>
                                Marketing and Communication skills
                            </li>
                            <li className='fs-5'>
                                Social Media Marketing experience
                            </li>
                            <li className='fs-5'>
                                Web Content Writing skills
                            </li>
                            <li className='fs-5'>
                                Web Analytics experience
                            </li>
                            <li className='fs-5'>
                                Familiarity with SEO best practices
                            </li>
                            <li className='fs-5'>
                                Strong analytical and problem-solving skills
                            </li>
                            <li className='fs-5'>
                                Bachelor's degree in Marketing, Communications, or related field
                            </li>
                            <li className='fs-5'>
                                Experience with Google Analytics and Google Ads is a plus
                            </li>
                        </ul>
                    </div>
                    <div className="roles-respond">
                        <div className="h4">Salary</div>
                        <ul>
                            <li className="cs-5">Salary will be 20k to 40k</li>
                            <li className="cs-5">
                                If you are selected, you will have a 1-month training period.
                                In that training period, salary will not be provided; after
                                that, you will be selected based on your performance. After
                                that, six months contract.
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

export default DMJ