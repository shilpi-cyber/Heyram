import React from 'react'
import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';
import '../css/Digital.css'

function DigitalCard({ input }) {
    return <>
        <Zoom>
            <Card className='digi-card' style={{ margin: "10px",height:"20rem", padding: "10px"}} >
                <div className='d-flex justify-content-center p-3'>
                    <Card.Img variant="top" style={{ width: "4rem" }} src={input.img} />
                </div>
                <Card.Body className='text-start text-white'>
                    <Card.Title>{input.name}</Card.Title>
                    <Card.Text>
                        {input.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Zoom>
    </>
}

export default DigitalCard