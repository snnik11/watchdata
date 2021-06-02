import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import heart from "./heart.gif";

function CardNum() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={heart} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some Custom text one can write here</Card.Text>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardNum;
