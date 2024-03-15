import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function JCards({input}) {
  return (
    <>
      <Card className="mt-3 p-2 mb-3" style={{height:"15rem"}}>
        <Card.Body>
          <Card.Title>{input.name}</Card.Title>
          <Card.Text>
            {input.description}
          </Card.Text>
          <Button variant="primary" >View & Apply</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default JCards;