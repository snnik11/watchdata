import React from "react";
import { Component } from "react";
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
    console.log(differenceSahilSleep);
    return (
      <>
        <h1> {differenceAdiFootsteps} is your diff Adi</h1>
        <h2> {differenceAdiSleep} is your sleep Adi</h2>
      </>
    );
  }
}
export default Top3;
