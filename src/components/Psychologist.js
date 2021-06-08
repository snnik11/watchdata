import React from "react";
import { AgGridReact } from "ag-grid-react";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import photo from "./Psychologist.jpg";
import "../App.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Badge from "react-bootstrap/Badge";
import FooterName from "./Footer";
import Top3 from "./TopThree";

class Psychologist extends Component {
  render() {
    //all users list
    const columns = [
      {
        headerName: "Id",
        field: "id",
        cellRenderer: function (params) {
          //for creating Symbol hyperlink
          let linkData = params.data.id;
          let linkedPage = `<a href= http://localhost:3000/dashboard/${linkData} target="_blank"> ${linkData}</a>`;
          return linkedPage;
        },
      },
      { headerName: "Name", field: "name" },
      { headerName: "Age group", field: "age-Group" },
      { headerName: "Gender", field: "gender" },
      { headerName: "Email", field: "email" },
      {
        headerName: "Phone",
        field: "phone",
        headingCell: { color: "darkblue", "background-color": "white" },
      },
      { headerName: "Body Type", field: "body_type" },
    ];

    //data in users
    var url1 = require("./user.json");
    console.log(url1.length);

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
      <div className="main bg-light">
        <br />

        {/* card on top */}
        <div clasname="card3">
          <Card style={{ borderColor: "white", justifyContent: "center" }}>
            <Card.Text
              style={{
                fontStyle: "italic",
                fontWeight: "bolder",
                fontSize: "35px",
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
                  height: "12%",
                  width: "12%",
                  // justifyContent: "right",
                }}
              />
            </Card.Text>
          </Card>
          <br />
        </div>
        <br />
        <br />
        {/* <Top3 /> */}
        {/* table  */}
        <div className="container">
          <h2
            style={{
              fontFamily: "arial",
              padding: "18px",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 37,
              color: "black",
            }}
          >
            Client Information
          </h2>
          <h3 style={{ color: "black" }}>You have {url1.length} clients</h3>
          <div
            className="ag-theme-alpine"
            style={{
              justifyContent: "center",
              height: "560px",
              width: "1300px",
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
        <br />
        {/* <FooterName /> */}
      </div>
    );
  }
}

export default Psychologist;
