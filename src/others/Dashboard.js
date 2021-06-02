import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { AgGridReact } from "ag-grid-react";
import walking from "./walking.gif";
import heart from "./heart.gif";
import sleepImage from "./sleep.gif";

class Dashboard extends Component {
  render() {
    var url = require("../components/fakedata.json");
    console.log(url);
    const columns = [
      { headerName: "Date(DD-MM-YYYY)", field: "Date" },
      { headerName: "Sleep(in hours)", field: "Sleep" },
      { headerName: "Step Count", field: "Step Count" },
      { headerName: "Heart Rate(BPM)", field: "Heart Rate" },
    ];
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
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card ">
                <img
                  src={heart}
                  alt="loading..."
                  width="200px"
                  height="200px"
                />
                <div className="card-header ">
                  <h4 className="card-title">User Heart Rate </h4>
                  <p className="card-category">User Profile 1</p>
                </div>
                <div className="card-heart ">
                  <Line
                    data={{
                      labels: date,
                      datasets: [
                        {
                          label: "Hear Rate",
                          data: heartRate,
                          borderColor: "rgb(255,51,51)",
                          backgroundColor: "rgb(255,102,102)",
                          fill: false,
                          tension: 0.1,
                          pointBackgroundColor: "rgb(255,0,0)",
                          pointBorderWidth: 0.1,
                        },
                      ],
                    }}
                  />

                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Heart
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">User Footsteps</h4>
                  <p className="card-category">Use Profile 1</p>
                </div>
                <div className="card-body ">
                  <img
                    src={walking}
                    alt="loading..."
                    width="200px"
                    height="200px"
                  />
                  <Line
                    data={{
                      labels: date,
                      datasets: [
                        {
                          label: "Foot steps",
                          data: footSteps,
                          borderColor: "rgb(51,153,255)",
                          backgroundColor: "rgb(0,00,255)",
                        },
                      ],
                    }}
                  />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Footsteps
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">User Sleep Hours</h4>
                  <p className="card-category">User Profile 1</p>
                </div>
                <div className="card-sleep ">
                  <img
                    src={sleepImage}
                    alt="loading..."
                    width="200px"
                    height="200px"
                  />
                  <Line
                    data={{
                      labels: date,
                      datasets: [
                        {
                          label: "Sleep",
                          data: sleep,
                          borderColor: "rgb(160,160,160)",
                          backgroundColor: "rgb(96,96,96)",
                        },
                      ],
                    }}
                  />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Sleep
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
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
                pagination={true}
                paginationPageSize={10} //shows only 10 records at a time
              />
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
