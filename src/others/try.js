import React from 'react'

function try() {
    return (
        <div>
            <CardGroup
          style={{
            //   justifyContent: "left",
            marginLeft: "auto",
            marginRight: "auto",
            height: "12rem",
            width: "28rem",
            border: "10px",
          }}
        >
          <Card>
            <Card.Img
              variant="top"
              src={walking}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "80%",
              }}
            />
            <Card.Text style={{ color: "blueviolet", fontWeight: "bold" }}>
              Number of steps {lastSt}
            </Card.Text>
            {/* <Card.Body> */}
            {/* <Card.Title>Recently you walked {lastSt} </Card.Title> */}
            {/* <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            {/* </Card.Body> */}
            {/* <Card.Footer>
              <small className="text-muted">Recently you walked {lastSt}</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={bed}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "80%",
              }}
            />
            <Card.Text style={{ color: "blueviolet", fontWeight: "bold" }}>
              Time in bed {lastSleep} h{" "}
            </Card.Text>
            {/* <Card.Body> */}
            {/* <Card.Title>Time in bed {lastSleep}</Card.Title> */}
            {/* <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text> */}
            {/* </Card.Body> */}
            {/* <Card.Footer>
              <small className="text-muted">Time in bed {lastSleep}</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={heartrate}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "80%",
                width: "80%",
                padding: "30px",
              }}
            />
            <Card.Text style={{ color: "blueviolet", fontWeight: "bold" }}>
              Latest Heart rate {lastH} BPM
            </Card.Text>
            {/* <Card.Body> */}
            {/* <Card.Title>Latest Heart rate {lastH}</Card.Title> */}
            {/* <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text> */}
            {/* </Card.Body> */}
            {/* <Card.Text> This is it</Card.Text> */}
            {/* <Card.Footer>
              <small className="text-muted">
                Latest Heart rate {lastH} BPM
              </small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
        <br />
        {/* card single */}
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bed} />
          <Card.Body>
            <Card.Title>Latest sleep time</Card.Title>
            <Card.Text>{lastItem} </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
        {/* </Card.Body>
        </Card> */}
        {/* card single */}
        <br />
      </div>
        </div>
    )
}

export default try
