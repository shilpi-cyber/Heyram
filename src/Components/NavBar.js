// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import '../Components/css/Navigation.css'

function NavBar() {

    return <>

        {['xxxl'].map((expand) => (
            <Navbar key={expand} expand={expand} fixed="top" variant="dark" className=" bg-transparent navbar w-100  text-white ">
                <Container fluid>
                    <Navbar.Brand href="/home" className='text-white' style={{padding:"0.5rem"}}><b>HEYRAM INFRASTRUCTURE</b></Navbar.Brand>
                    <Navbar.Toggle style={{color:"white"}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header className='bg-light text-dark p-3' closeButton>
                        <Fade><Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                MENU
                            </Offcanvas.Title></Fade>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='body-b text-white'>
                            <Nav className="justify-content-end nav-body  flex-grow-1 bg-* pe-3">
                                <Zoom><Nav.Link className='links' href='/home' >HOME</Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/genz">GEN-Z AI</Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/digital-service">DIGITAL SERVICES</Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/aws">CLOUD SERVICES</Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/crypto">CRYPTO MINING</Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/agriculture">AGRICULTURE </Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/career">CAREER </Nav.Link></Zoom>
                                <Zoom><Nav.Link className='links' href="/about">ABOUT </Nav.Link></Zoom>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}

    </>
}

export default NavBar