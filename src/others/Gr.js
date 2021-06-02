// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// //import { useParams } from "react-router-dom";
// //import { Badge } from "reactstrap";
// import { AgGridReact } from "ag-grid-react";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// const Gr = () => {

// const columns = [
//     { headerName: "Heart Rate", field: "heartRate" },
// ]

//   const defaultColDef = {
//     sortable: true,
//     filter: true,
//     flex: 1,
//     floatingFilter: true,
//   };

//   var url = require("./fakedata.json");
//   const date=[];
//      const heartRate=[];
//      const footSteps=[];
//      const sleep=[];
//      for (var i=0; i< url.length;i++)
//      {
//      date[i]= url[i].Date;
//      heartRate[i]= url[i]['Heart Rate'];
//      footSteps[i]= url[i]['Step Count'];
//      sleep[i]= url[i].Sleep;
//   return (
//     <div
//       className="ag-theme-alpine"
//       style={{
//         height: "401px",
//         width: "90%",
//         fontSize: "17px",
//         marginLeft: "auto",
//         marginRight: "auto",
//       }}
//     >

//       <AgGridReact
//         rowData={url}
//         columnDefs={columns}
//         defaultColDef={defaultColDef}
//         pagination={true}
//       />
//       <br />

//       <Line
//         data={{
//           labels: date,
//           datasets: [
//             {
//               label: "Closing Price",
//               data: heartRate,
//               fill: false,
//               backgroundColor: "rgba(75,162,403,1)",
//               borderColor: "rgba(0,0,0,1)",
//               // borderColor: "rgba(255,192,203, 0.8)",
//               borderWidth: 2,
//               lineTension: 0.5,
//             },
//           ],
//         }}
//         height={401}
//         width={603}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               beginAtZero: true,
//             },
//           },
//         }}
//       />
//       <br />

//       <br />
//     </div>
//   );
// };
// export default Gr;
