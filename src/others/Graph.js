import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
function Graph() {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Img
          variant="top"
          //   src={heartrate}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            height: "80%",
            width: "80%",
            padding: "30px",
          }}
        />
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Graph;
