import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Zoom from 'react-reveal/Zoom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/About.css';

function About() {
    useEffect(() => {
        document.title = "Cloud Services"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <motion.div className='container-fluid about-row' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <Zoom>
                <div className='row about '>
                    <div className='col-md-12 about-col text-white text-center'>
                        <div className='display-4  about-title'>
                            ABOUT-US
                        </div>
                        <p className='m-2 about-para'>We’ve driven over N number of leads for clients through digital marketing services</p>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className='row about-conte pt-5'>
                    <div className='col-md-6'>
                        <img className='w-100' src="https://tridotstech.com/files/about-usf8c910.png" alt="about-usimage" />
                    </div>
                    <div className='col-md-6 '>
                        <div className='h1'>
                            Who We Are ?
                        </div><br />
                        <p className='about-content'>Heyram Infrastructure is a forward-thinking Private Limited Company based in Chennai, Tamil Nadu. We’ve been at the forefront of innovation, seamlessly integrating three distinct pillars:
                        </p>
                        <div className='lists '>
                            <Zoom>
                                <ul>
                                    <Zoom><li className='about-content'><b className='about-content'>Digital Marketing Services:</b> Our team of strategists, creatives, and data enthusiasts thrive on driving brand visibility, engagement, and conversions. From SEO wizardry to social media sorcery, we’ve got your digital presence covered.</li><br /></Zoom>
                                    <Zoom><li className='about-content'><b className='about-content'>Software Development:</b> Code is our canvas, and solutions are our masterpieces. Whether it’s web applications, mobile apps, or custom software, we transform ideas into elegant, functional reality.</li><br /></Zoom>
                                    <Zoom><li className='about-content'><b className='about-content'>Saffron Selling:</b> From the mystical fields of Kashmir to your kitchen, our saffron threads are a symphony of flavor and health. We source, package, and deliver saffron with love and precision.</li><br /></Zoom>
                                </ul>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className='row p-5'>
                    <Zoom>
                        <div className='col-md-6'>
                            <Zoom>
                                <div className='h1'>
                                    Why Choose Heyram?
                                </div><br />
                            </Zoom>
                            <Zoom>
                                <p className='pt-5 about-content'><b> Holistic Approach:</b> We don’t just build websites; we build experiences. Spice Up Your Business: Our saffron adds a golden touch to your culinary creations.Code Craftsmanship: Our developers write poetry in Python and symphonies in JavaScript.Data-Driven Marketing: Metrics matter, and we turn data into actionable insights.Client-Centric: Your success is our obsession. Let’s create magic together! <br /><br />
                                    Connect with us to explore the intersection of technology, flavor, and marketing brilliance.</p>
                            </Zoom>
                        </div>
                    </Zoom>
                    <div className='col-md-6'>
                        <Zoom>
                            <div className=''>
                            <img className='w-100' src="https://img.freepik.com/premium-photo/business-meeting_53876-91042.jpg" alt="" />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className='row p-5'>
                    <div className='col-md-4'>
                        <Zoom>
                            <Card className='cards m-2 text-dark' style={{ height: "19rem" }} >
                                <Card.Img variant="top" className='w-25 d-flex text-center rounded-circle' src="https://thumbs.dreamstime.com/b/our-mission-icon-isolated-white-background-your-web-mobile-app-design-133861134.jpg" />
                                <Card.Body>
                                    <Card.Title>Our Mission</Card.Title>
                                    <Card.Text style={{ fontWeight: "400" }}>
                                        We think that every person has the potential to achieve great things.<br />
                                        We have four principles (commitment, quality, integrity, and care) that guide our business, product development, and brand as we change and grow.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </div>

                    <div className='col-md-4'>
                        <Zoom>
                            <Card className='cards m-2 text-dark' style={{ height: "19rem" }} >
                                <Card.Img variant="top" className='w-25 d-flex justify-content-center rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVT6Xx7Sh66nhSIrFe6k1M8cSqQZ5lirtrDEMUM-afKHb-8aCB3XasO3SwytFWoLp-0c&usqp=CAU" />
                                <Card.Body >
                                    <Card.Title>Our Values</Card.Title>
                                    <Card.Text style={{ fontWeight: "400" }}>
                                        We have four principles (commitment, quality, integrity, and care) that guide our business, product development, and brand as we change and grow.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </div>

                    <div className='col-md-4'>
                        <Zoom>
                            <Card className='cards m-2 text-dark' style={{ height: "19rem" }} >
                                <Card.Img variant="top" className='w-25 d-flex justify-content-center rounded-circle' src="https://img.freepik.com/free-vector/illustration-shaking-hands-agreement_53876-5892.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709337600&semt=ais" />
                                <Card.Body>
                                    <Card.Title>Our Pledge</Card.Title>
                                    <Card.Text style={{ fontWeight: "400" }}>
                                        We promise to understand your business, welcome challenges, give the best web design experience, and provide exceptional client service.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </div>
                </div>
                <div className='row p-5 contact-end'>
                    <div className='col-md-6'>
                        <div className='contact1'>
                            <div className='h1  '>
                                Ready To Boost Your Business Online?
                            </div>
                            <p style={{ fontSize: "1.5rem" }}>Request a Free Quote & Tell Us About Your Project. We Help Build Your Road To Success.</p>
                            <p className='h4 '>Give Us a Call</p>
                            <a style={{ textDecoration: "none", color: "blue", fontSize: "1rem", fontWeight: "400" }} href="tel:+917538870577" className='pb-4'>7538870577</a>
                        </div>
                        <div className='contact1 '>
                            <div className='h5 pt-4'>
                                Help Desk
                            </div>
                            <div>
                                <a style={{ textDecoration: "none", color: "blue", fontSize: "1rem", fontWeight: "400" }} href="mailto:info@heyraminfrastruture.com">HeyRam Infrastructure</a>
                            </div>
                        </div>
                        <div className='address text-star pt-5'>
                            <div className='h4' >
                                ADDRESS
                            </div>
                            <div style={{ fontWeight: "300", fontSize: "1rem" }}>
                                Hey Ram Infrastructure 21,<br /> Rammurthy Ave 2nd St, <br />Sakthi Nagar,<br /> Ganga Nagar,<br /> Chennai, Tamil Nadu 600116, India
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 text-center p-3'>
                        <div>
                            <div className='h1'>
                                Let's create something new !
                            </div>
                            <div className='p-3 contact-head'>
                                Your new digital platform starts here. Tell us your dream and make it real.
                            </div>
                        </div>
                        <div className='form-section d-flex justify-content-center'>
                            <Form action='mailto:info@heyraminfrastructure.com' method='POST' className='w-100'>
                                <Form.Group className="mb-3" >
                                    <Form.Control className='input-boxx text-dark' type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Control className='input-boxx  text-dark' type="text" placeholder="Your Phone" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control className='input-boxx text-dark' type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control placeholder='SUBJECT' className='input-boxx  text-dark' as="textarea" rows={4} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SUBMIT
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Zoom>
        </motion.div >
    </>
}

export default About