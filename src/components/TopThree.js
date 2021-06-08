import React from "react";
import { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";

class Top3 extends Component {
  render() {
    var url;
    var footSteps = [];
    var sleep = [];
    var firstfootSteps = [];
    var firstsleep = [];
    var secondfootSteps = [];
    var secondsleep = [];
    function getValue(url) {
      for (var i = 0; i < url.length; i++) {
        if (url[i]["Steps"] != "NA" && url[i]["Hours"] != "NA") {
          footSteps[i] = url[i]["Steps"];
          sleep[i] = url[i].Hours;
        } else {
          footSteps[i] = 0;
          sleep[i] = 0;
        }
      }
      for (var i = 0; i < 30; i++) {
        {
          firstfootSteps[i] = footSteps[i];
          firstsleep[i] = sleep[i];
        }
      }
      for (var i = 0; i < footSteps.length - 30; i++) {
        secondfootSteps[i] = footSteps[30 + i];
        secondsleep[i] = sleep[30 + i];
      }
    }

    function averageFootsteps(footSteps) {
      var sum = 0;
      for (var i = 0; i < footSteps.length; i++) sum += footSteps[i];
      return sum / footSteps.length;
    }
    function averageSleep(sleep) {
      var sum = 0;
      for (var i = 0; i < sleep.length; i++) sum += sleep[i];
      return sum / sleep.length;
    }

    var averageFirstFoot = 0;
    var averageSecondFoot = 0;
    var averageFirstSleep = 0;
    var averageSecondSleep = 0;
    var differenceBalaFootsteps = 0;
    var differenceBalaSleep = 0;
    var differenceYashFootsteps = 0;
    var differenceYashSleep = 0;
    var differenceAdiFootsteps = 0;
    var differenceAdiSleep = 0;
    var differencePriyaFootsteps = 0;
    var differencePriyaSleep = 0;
    var differenceTejusFootsteps = 0;
    var differenceTejusSleep = 0;
    var differenceSahilFootsteps = 0;
    var differenceSahilSleep = 0;

    url = require("./bala.json");
    getValue(url);
    averageFirstFoot = averageFootsteps(firstfootSteps);
    averageSecondFoot = averageFootsteps(secondfootSteps);
    averageFirstSleep = averageSleep(firstsleep);
    averageSecondSleep = averageSleep(secondsleep);
    differenceBalaFootsteps = averageFirstFoot - averageSecondFoot;
    differenceBalaSleep = averageFirstSleep - averageSecondSleep;

    url = require("./yash.json");
    getValue(url);
    averageFirstFoot = averageFootsteps(firstfootSteps);
    averageSecondFoot = averageFootsteps(secondfootSteps);
    averageFirstSleep = averageSleep(firstsleep);
    averageSecondSleep = averageSleep(secondsleep);
    differenceYashFootsteps = averageFirstFoot - averageSecondFoot;
    differenceYashSleep = averageFirstSleep - averageSecondSleep;

    url = require("./tejus.json");
    getValue(url);
    averageFirstFoot = averageFootsteps(firstfootSteps);
    averageSecondFoot = averageFootsteps(secondfootSteps);
    averageFirstSleep = averageSleep(firstsleep);
    averageSecondSleep = averageSleep(secondsleep);
    differenceTejusFootsteps = averageFirstFoot - averageSecondFoot;
    differenceTejusSleep = averageFirstSleep - averageSecondSleep;

    url = require("./priya.json");
    getValue(url);
    averageFirstFoot = averageFootsteps(firstfootSteps);
    averageSecondFoot = averageFootsteps(secondfootSteps);
    averageFirstSleep = averageSleep(firstsleep);
    averageSecondSleep = averageSleep(secondsleep);
    differencePriyaFootsteps = averageFirstFoot - averageSecondFoot;
    differencePriyaSleep = averageFirstSleep - averageSecondSleep;

    url = require("./adi.json");
    getValue(url);
    averageFirstFoot = averageFootsteps(firstfootSteps);
    averageSecondFoot = averageFootsteps(secondfootSteps);
    averageFirstSleep = averageSleep(firstsleep);
    averageSecondSleep = averageSleep(secondsleep);
    differenceAdiFootsteps = averageFirstFoot - averageSecondFoot;
    differenceAdiSleep = averageFirstSleep - averageSecondSleep;

    url = require("./sahil.json");
    getValue(url);
    averageFirstFoot = averageFootsteps(firstfootSteps);
    averageSecondFoot = averageFootsteps(secondfootSteps);
    averageFirstSleep = averageSleep(firstsleep);
    averageSecondSleep = averageSleep(secondsleep);
    differenceSahilFootsteps = averageFirstFoot - averageSecondFoot;
    differenceSahilSleep = averageFirstSleep - averageSecondSleep;

    console.log(differenceSahilFootsteps);
    console.log(differenceAdiFootsteps);
    console.log(differenceBalaFootsteps);
    //  console.log(differenceBalaFootsteps);
    console.log(differencePriyaFootsteps);
    console.log(differenceTejusFootsteps);
    console.log(differenceYashFootsteps);
    console.log(" ----------");
    console.log(differenceSahilSleep);
    console.log(differenceAdiSleep);
    console.log(differenceBalaSleep);
    console.log(differencePriyaSleep);
    console.log(differenceTejusSleep);
    console.log(differenceYashSleep);

    //sort top 3
    var DiffSleepAll = [
      differenceSahilSleep,
      differenceAdiSleep,
      differenceBalaSleep,
      differencePriyaSleep,
      differenceTejusSleep,
      differenceYashSleep,
    ];

    var DiffFootStepAll = [
      differenceSahilFootsteps,
      differenceAdiFootsteps,
      differenceBalaFootsteps,
      differencePriyaFootsteps,
      differenceTejusFootsteps,
      differenceYashFootsteps,
    ];
    // sort sleep starts
    var max = new Array();
    function sleepSort() {
      // var sleepScore = [];
      var sleepScore = DiffSleepAll;

      max[0] = 0;
      max[1] = 0;
      max[2] = 0;
      for (var i = 0; i < sleepScore.length; i++) {
        if (sleepScore[i] > max[0]) {
          max[0] = sleepScore[i];
        }
      }
      for (var i = 0; i < sleepScore.length; i++) {
        if (sleepScore[i] > max[1] && sleepScore[i] < max[0])
          max[1] = sleepScore[i];
      }
      for (var i = 0; i < sleepScore.length; i++) {
        if (sleepScore[i] > max[2] && sleepScore[i] < max[1])
          max[2] = sleepScore[i];
      }
    }
    //sort sleep ends

    //sort footsteps starts
    var maxSteps = new Array();
    function stepsSort() {
      // var sleepScore = [];
      var stepsScore = DiffFootStepAll;

      maxSteps[0] = 0;
      maxSteps[1] = 0;
      maxSteps[2] = 0;
      for (var i = 0; i < stepsScore.length; i++) {
        if (stepsScore[i] > maxSteps[0]) {
          maxSteps[0] = stepsScore[i];
        }
      }
      for (var i = 0; i < stepsScore.length; i++) {
        if (stepsScore[i] > max[1] && stepsScore[i] < maxSteps[0])
          maxSteps[1] = stepsScore[i];
      }
      for (var i = 0; i < stepsScore.length; i++) {
        if (stepsScore[i] > max[2] && stepsScore[i] < maxSteps[1])
          maxSteps[2] = stepsScore[i];
      }
    }
    //sort footsteps ends
    sleepSort();
    stepsSort();
    console.log(`this is ${max[0]}`);

    return (
      <div>
        {/* <h1>
          hi {max[1]} {max[2]}
        </h1> */}
        <CardDeck>
          <div
            className="d-flex flex-row"
            style={{ justifyContent: "center", width: "50%", height: "30%" }}
          >
            <div className="p-2">
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "blueviolet",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Top 3 Sleep...
                  </Card.Title>
                  <Card.Text> {max[0]} Adi</Card.Text>
                  <Card.Text> {max[1]} Sahil</Card.Text>
                  <Card.Text> {max[2]} bala</Card.Text>
                </Card.Body>
              </Card>
            </div>{" "}
            <div className="p-2">
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "blueviolet",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Top 3 steps
                  </Card.Title>
                  <Card.Text>{maxSteps[0]} Sahil</Card.Text>
                  <Card.Text>{maxSteps[1]} Yash</Card.Text>
                  <Card.Text>{maxSteps[2]} Bala</Card.Text>
                </Card.Body>
              </Card>
            </div>
            {/* <div className="p-2">
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>this</Card.Text>
                </Card.Body>
              </Card>
            </div> */}
          </div>
        </CardDeck>
      </div>
    );
  }
}
export default Top3;
