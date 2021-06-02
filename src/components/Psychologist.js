import React from "react";
import { AgGridReact } from "ag-grid-react";
import { Component } from "react";

import Card from "react-bootstrap/Card";
import photo from "./Psychologist.jpg";
import "../App.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Badge } from "reactstrap";

class Psychologist extends Component {
  render() {
    //all users list
    const columns = [
      {
        headerName: "Id",
        field: "id",
        cellRenderer: function (params) {
          //for creating Symbol hyperlink
          let linkMyData = params.data.id;
          let linkedPage = `<a href= http://localhost:3000/dashboard/${linkMyData} target="_blank"> ${linkMyData}</a>`;
          return linkedPage;
        },
      },
      { headerName: "Name", field: "name" },
      { headerName: "Email", field: "email" },
      {
        headerName: "Phone",
        field: "phone",
        headingCell: { color: "darkblue", "background-color": "white" },
      },
      { headerName: "Heart Rate(BPM)", field: "Heart Rate" },
      { headerName: "Sleep(in hours)", field: "Sleep" },
      { headerName: "Step Count", field: "Step Count" },
    ];

    //data in users
    var url1 = require("./user.json");

    //graph in table starts //
    // var url = require("./fakedata.json");
    // const heartRate = [];
    // const footSteps = [];
    // const sleep = [];
    // for (var i = 0; i < url.length; i++) {
    //   heartRate[i] = url[i]["Heart Rate"];
    //   footSteps[i] = url[i]["Step Count"];
    //   sleep[i] = url[i].Sleep;
    // }
    // function graphHeart() {
    //   url1[0]["Heart Rate"] = heartRate;
    //   url1[0]["Step Count"] = footSteps;
    //   url1[0]["Sleep"] = sleep;
    //   console.log(url1[0]);
    // }
    // graphHeart();

    //ag grid features
    const defaultColDef = {
      flex: 1,
      filter: true,
      floatingFilter: true,
      sortable: true,
    };

    return (
      <div className="main">
        <br />

        {/* card on top */}
        <div clasname="card3" style={{ justifyContent: "center" }}>
          <Card style={{ borderColor: "white" }}>
            <Card.Text
              style={{
                fontStyle: "italic",
                fontWeight: "bolder",
                fontSize: "40px",
                color: "lightcoral",
                fontFamily: "Caveat",
              }}
            >
              Welcome Mr Greg!
              <Card.Img
                variant="top"
                src={photo}
                style={{
                  // marginLeft: "auto",
                  // marginRight: "auto",
                  height: "20%",
                  width: "20%",
                  justifyContent: "right",
                }}
              />
            </Card.Text>
          </Card>
          <br />
        </div>
        <br />

        <br />

        {/* table  */}
        <div className="container">
          <h2
            style={{
              fontFamily: "arial",
              padding: "21px",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 37,
              color: "lightcoral",
            }}
          >
            User Information
          </h2>
          <p>
            <Badge color="success">{url1.length} </Badge>numbers of clients
          </p>

          <div
            className="ag-theme-alpine"
            style={{
              justifyContent: "center",
              height: "700px",
              width: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "19px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <AgGridReact
              rowData={url1}
              columnDefs={columns}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10} //shows only 10 records at a time
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Psychologist;
