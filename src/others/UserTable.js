import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
//import { Badge } from "reactstrap";

// import Ag-grid structure stylesheet and theme
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Card, Button, CardGroup } from "react-bootstrap";
import bed from "./sleep.gif";
import walking from "./walking.gif";
import heartrate from "./heartrate.gif";
const UserTable = () => {
  const columns = [
    {
      headerName: "Date(DD-MM-YYYY)",
      field: "Date",
      backgroundColor: "lightpink",
    },
    { headerName: "Sleep(in hours)", field: "Sleep" },
    { headerName: "Step Count", field: "Step Count" },
    { headerName: "Heart Rate(BPM)", field: "Heart Rate" },
  ];
  var url = require("./fakedata.json");
  console.log(url);
  const defaultColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true,
    sortable: true,
  };

  return (
    <div class="flex-container">
      <div className="flex-child magenta">
        <h2
          style={{
            fontFamily: "arial",
            padding: "21px",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 37,
          }}
        >
          User Information
        </h2>

        <div
          className="ag-theme-alpine"
          style={{
            justifyContent: "center",
            height: "571px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "19px",
          }}
        >
          <AgGridReact
            rowData={url}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10} //shows only 10 records at a time
          />

          <br />
        </div>

        <br />
      </div>
      <div className="flex-child green">
        <CardGroup
          style={{
            justifyContent: "right",
            marginLeft: "auto",
            // marginRight: "auto",
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
              Number of steps
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
              Time in bed h{" "}
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
              Latest Heart rate BPM
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
  );
};

export default UserTable;
