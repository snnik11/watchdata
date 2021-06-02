import React from "react";
import { AgGridReact } from "ag-grid-react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "./Dash.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";
import bed from "./sleep.gif";
import walking from "./walking.gif";
import heartrate from "./heartrate.gif";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router";

const Dash = () => {
  //let URL_Qchart = `https://financialmodelingprep.com/api/v3/historical-price-full/${LinkQuery}?&apikey=66b45054f09ccb85c9e78997eaa2a2da`;
  const { linkData } = useParams();
  let urlchart = `http://localhost:3000/dashboard/1 `;
  //let { id } = useParams();

  //column with all 3 parameter
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

  //user information
  var url = require("./fakedata.json");
  console.log(url);

  //ag grid features
  const defaultColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true,
    sortable: true,
  };

  //graph details
  const date = [];
  const heartRate = [];
  const footSteps = [];
  const sleep = [];
  for (var i = 0; i < url.length; i++) {
    date[i] = url[i].Date;
    heartRate[i] = url[i]["Heart Rate"];
    footSteps[i] = url[i]["Step Count"];
    sleep[i] = url[i].Sleep;
  }

  //latest sleep readings
  const lastS = sleep[sleep.length - 1];
  const lastSleep = `${lastS}`;

  //latest step readings
  const lastSt = footSteps[footSteps.length - 1];

  //console.log(lastSteps);

  const lastH = heartRate[heartRate.length - 1];

  //* * * * *

  //lastest date readings
  const lastDate = [date[date.length - 1]];

  // pie  showing  sleep reading from 24h
  const lastSleepPieData = [lastSleep, 24 - lastSleep];

  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}> Historical Data of {linkData}</h1>
      {/* <h3> </h3> */}
      <h1
        style={{
          textAlign: "center",
          color: "lightcoral",
        }}
      >
        {/* <h2> ID : {id}</h2> */}
        User Profile
      </h1>
      <br />
      <div className="flex-container">
        <br />

        {/* Ag grid react starts*/}
        <div
          className="ag-theme-alpine"
          style={{
            // justifyContent: "center",
            height: "650px",
            width: "70%",
            paddingLeft: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "black",
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
        </div>
        {/* Ag grid react ends */}
        <br />
        <br />
        {/* widget start */}
        <div className="cardgroup">
          <CardGroup
            className="mb-2"
            style={{
              //   justifyContent: "left",
              marginLeft: "auto",
              marginRight: "auto",
              height: "3rem",
              width: "13rem",
              border: "info",
              //border: "10px",
            }}
          >
            <Card className="rounded border border-4 border border-white ">
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
            </Card>
          </CardGroup>
        </div>
        <br />
        {/* widget end */}
        <br />
      </div>
      <br />
      <br />
      <br /> <br /> <br />
      <div className="graphs">
        <div
          style={{
            justifyContent: "left",
            float: "left",
            height: "50%",
            width: "50%",
            // height:"60%",
            //width:"75%",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "19px",
            padding: 0,
          }}
        >
          <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: "Foot steps",
                  data: footSteps,
                  borderColor: "rgb(243, 144, 238)",
                  backgroundColor: "black",
                  borderWidth: 2,
                  lineTension: 0.4,
                },
              ],
            }}
          />
        </div>
        <div
          className="line 2"
          style={{
            justifyContent: "left",
            float: "left",

            height: "50%",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            // paddingRight: "9px",
            fontSize: "19px",
          }}
        >
          {/* <Doughnut
            data={{
              labels: lastDate,
              datasets: [
                {
                  data: lastSleepPieData,
                  borderWidth: 2,
                  backgroundColor: ["#B21F00", "#C9DE00"],
                  hoverBackgroundColor: ["#501800", "#4B5000"],
                },
              ],
            }}
          /> */}
          <Bar
            data={{
              labels: date,
              datasets: [
                {
                  label: "Sleep",
                  data: sleep,
                  borderColor: "rgb(26, 18, 73)",
                  backgroundColor: "rgb(241, 127, 33)",
                  borderWidth: 2,
                },
              ],
            }}
          />
          <br />
          <p> Heart rate (count/min) </p>
        </div>

        <div
          className="line 2"
          style={{
            // justifyContent: "right",
            // float: "left",
            height: "30%",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "19px",
            //paddingRight: "10px",
          }}
        >
          <Line
            data={{
              labels: date,
              datasets: [
                {
                  label: "Hear Rate",

                  data: heartRate,
                  // borderColor: "rgb(255,51,51)",
                  //  backgroundColor: "rgb(255,102,102)",

                  borderColor: "rgb(144, 220, 243)",
                  //backgroundColor: "rgb(144, 220, 243)",
                  backgroundColor: " rgb(213, 240, 248)",
                  fill: false,
                  //  tension: 0.1,
                  // pointBackgroundColor: "rgb(255,0,0)",
                  //  pointBorderWidth: 0.1,
                  borderWidth: 3,
                  lineTension: 0.3,
                },
              ],
            }}
          />
        </div>
        <br />
      </div>
      <br />
      <br />
    </div>
    //--------
  );
};

export default Dash;
