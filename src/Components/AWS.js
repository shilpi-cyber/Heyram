import React, { useEffect } from 'react'
import './css/Aws.css'
import Zoom from 'react-reveal/Zoom';
import { motion } from 'framer-motion'
import Card from 'react-bootstrap/Card';
import Image1 from '../Assets/inno.jpg'
import Image2 from '../Assets/mana.jpg'
import Image3 from '../Assets/dcd.jpg'
import Image4 from '../Assets/rty.jpg'
import Image5 from '../Assets/h6yu.jpg'
import Image6 from '../Assets/yab.jpg'
import Image7 from '../Assets/yun.jpg'

function AWS() {
    useEffect(() => {
        document.title = "Cloud Services"
        window.scrollTo(0, 0)
    }, [])

    return <>
        <motion.div className='container-fluid aws' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className="row aws-row ">
                <div className='col-md-12 text-white text-center p-4 '>
                    <Zoom><div><b className='display-6'>CLOUD SERVICES</b></div></Zoom>
                    <Zoom>
                        {/* <img src={myImage} alt="Description of the image" style={{borderRadius:"15px",opacity:"0.5"}} className='w-50 text-center' /> */}
                        <div className='title p-3'>Secure and managed cloud solutions that drive the outcomebased modernization you need</div>
                    </Zoom>
                    <div className='aws-content'>
                        <Zoom>
                            <div className='title awsc-heading p-3 text-white'>
                                Here's what makes us stand out
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
            <div className='col-md-3  text-center'>
                    <Zoom>
                        <Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                            <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image1} />
                            <Card.Body>
                                <Card.Title>Unlock innovation with the right cloud solutions : </Card.Title>
                                <Card.Text>
                                    Although the cloud has
                                    become a transformation enabler, there are still many obstacles standing in the way of cloud
                                    growth, and many businesses are finding it difficult to demonstrate the value of cloud
                                    computing or to connect IT to business results.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Zoom>
                </div>

                <div className='col-md-3  text-center'>
                <Zoom> <Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                        <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image2} />
                        <Card.Body>
                            <Card.Title>Managed Cloud Services</Card.Title>
                            <Card.Text>
                                HeyramInfrastructure offers businesses a range of managed services that cover the entire IT stack in addition to a suite of unmatched
                                capabilities across public, private, and hybrid cloud, empowering them to optimize and modernize their infrastructure and applications and fully leverage the cloud.
                            </Card.Text>
                        </Card.Body>
                    </Card> </Zoom>
                </div>

                <div className='col-md-3  text-center'>
                <Zoom><Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                        <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image3} />
                        <Card.Body>
                            <Card.Title>Cloud Migration Services</Card.Title>
                            <Card.Text>
                                With HeyramInfrastructure Cloud Migration Services, start
                                your cloud adoption journey. Create and implement the best migration plan possible for your
                                company. With our professional evaluation and smooth workload migration capabilities, you
                                can reduce the complexity of cloud migration and expedite your journey.
                            </Card.Text>
                        </Card.Body>
                    </Card> </Zoom>
                </div>

                <div className='col-md-3  text-center'>
                <Zoom><Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                        <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image4} />
                        <Card.Body>
                            <Card.Title>Modern Operations</Card.Title>
                            <Card.Text>
                                HeyramInfrastructure offers unmatched value that iterates on your
                                present status, projected future needs, and the specific steps necessary to enhance efficiency and
                                optimize your operational processes. HeyramInfrastructure does this by seamlessly integrating
                                people, processes, and cutting-edge technology.
                            </Card.Text>
                        </Card.Body>
                    </Card> </Zoom>
                </div>
            </div>
            <div className='row pt-5 pb-5'>
                    <div className='col-md-4  text-center'>
                    <Zoom> <Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                            <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image5} />
                            <Card.Body>
                                <Card.Title>Cloud Consulting</Card.Title>
                                <Card.Text>
                                    To develop your ideal cloud strategy, simplify your IT
                                    infrastructure, and accomplish the desired business outcomes, take advantage of our decades
                                    of experience working with some of the most complex IT systems on the planet.
                                </Card.Text>
                            </Card.Body>
                        </Card> </Zoom>
                    </div>
                    <div className='col-md-4  text-center'>
                    <Zoom><Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                            <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image6} />
                            <Card.Body>
                                <Card.Title>Private Cloud Services</Card.Title>
                                <Card.Text>
                                    Discover the ideal fusion of private infrastructure
                                    performance, security, compliance, and cloud efficiency, which gives you the ability to
                                    manage and modernize your business. With our dedicated on-premise resources and our
                                    smooth connection with workloads from public clouds,
                                </Card.Text>
                            </Card.Body>
                        </Card> </Zoom>
                    </div>
                    <div className='col-md-4  text-center'>
                    <Zoom> <Card style={{borderRadius:"15px"}} className='w-100 mb-2'>
                            <Card.Img variant="top" style={{borderRadius:"15px"}} src={Image7} />
                            <Card.Body>
                                <Card.Title>Public Cloud Services</Card.Title>
                                <Card.Text>
                                    Our services are tried-and-true, repeatable, and standardized,
                                    enabling you to easily develop and launch workloads and apps on the best public cloud
                                    platform for your business.
                                </Card.Text>
                            </Card.Body>
                        </Card> </Zoom>
                    </div>
                </div>
        </motion.div >
    </>
}

export default AWS