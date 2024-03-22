import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function JCards({input}) {
  return (
    <>
      <Card className='text-white  m-1' style={{"background":"url(https://i.pinimg.com/564x/e8/bb/0f/e8bb0f20c7ca4a3724bfee857a540902.jpg)","border":"2px solid cyan" }} >
        <Card.Body>
          <Card.Link style={{"textDecoration":"none"}} href={input.path}><Card.Title>{input.name}</Card.Title></Card.Link>
          <Card.Text>
            {input.description}
          </Card.Text>
          <div className=" d-flex justify-content-end" >
            Full Time
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default JCards;