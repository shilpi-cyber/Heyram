import React from 'react'
import Card from 'react-bootstrap/Card';

function ACard({ input }) {
    return <>
        <Card style={{margin:"2rem"}}>
            <Card.Img variant="top" src={input.img} />
            <Card.Body className='card-b text-white'>
                <Card.Title>{input.name}</Card.Title>
                <Card.Text>
                    {input.description1}<br />{input.description2}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default ACard