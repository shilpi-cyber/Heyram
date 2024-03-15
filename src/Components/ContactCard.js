import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import './css/Enquiry.css'
import { motion } from 'framer-motion';

function ContactCard() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <>
        <motion.div className='container-fluid d-flex justify-content-center align-items-center enquiry-card' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className='row form-row pt-5'>
                <div className='col-md-12 text-center  form-ele'>
                    <div className='form-comp'>
                        <div className=' form-title m-5 display-6'>
                            LET US DIRECT YOUR ENQUIRY
                        </div>
                        <div className='form-section text-start'>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Control className='input-box text-white' type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Control className='input-box  text-white' type="text" placeholder="Your Phone" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control className='input-box text-white' type="email" placeholder="Enter email" />
                                    <Form.Text  className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control placeholder='Message' className='input-box text-white' as="textarea" rows={2} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Check  type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SUBMIT
                                </Button> &nbsp;&nbsp;
                                <Link to='/digital-service'><Button variant="warning" type="submit">
                                    BACK
                                </Button></Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </>
}

export default ContactCard