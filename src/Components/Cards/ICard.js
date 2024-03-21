import React from 'react'
import Card from 'react-bootstrap/Card';

function ICard(props) {
    return <>
        <Card className='text-white h-100' style={{"backgroundColor":"black"}} >
            <Card.Body className=''>
                <Card.Title>{props.input.name}</Card.Title>
                <Card.Text>
                    {props.input.description}
                </Card.Text>
                <Card.Link target='_blank' className='apply-link' style={{textDecoration:"none",fontWeight:"400"}} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</Card.Link>
                <Card.Link className='down-link' style={{textDecoration:"none",fontWeight:"400"}} href={props.input.path}>View and Apply</Card.Link>
            </Card.Body>
        </Card>
    </>
}

export default ICard