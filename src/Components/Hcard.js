import React from 'react'
import Card from 'react-bootstrap/Card';
import './css/CardS.css'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

function Hcard({ input }) {
    return <>
        <Zoom> <Link to={input.path} style={{ textDecoration: "none", color: "whitesmoke"}}>
            <Card className='body-c m-2' style={{ height: "31rem" , border:"1px solid white" , padding: "1px"}} >
                <Card.Img variant="top" src={input.img} />
                <Card.Body className='text-start'>
                    <Card.Title>{input.name}</Card.Title>
                    
                    <Card.Text>
                        {input.description}
                        <Zoom><Link to={input.path}><button className='btn bg-primary dark text-white w-50  m2-5 p-3' id='knowmore' style={{alignItems:'center' }}  >Know More</button>
                        </Link></Zoom>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link></Zoom>

    </>
}

export default Hcard