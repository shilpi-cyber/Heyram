import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function JCards({input}) {
  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={input.badge} />
        <Card.Body>
          <Card.Title>{input.name}</Card.Title>
          <Card.Text>
            {input.badge}
          </Card.Text>
          <Button variant="primary">View & Apply</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default JCards;
