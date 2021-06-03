import React from "react";
//import hero from "./hero.jpg";

//footer ends

function FooterName() {
  return (
    <section className="home-hero">
      {/* <img
        src={hero}
        alt="Hero image displays here"
        style={{ width: "100%", height: "71vh", padding: "0" }}
      /> */}

      <div
        style={{
          padding: "71px",
          background: "white",
          justifyContent: "space-between",
          fontStyle: "italic",
          backgroundColor: "lightcoral",
        }}
      >
        <h1
          style={{
            fontWeight: "bolder",
            fontFamily: "cursive",
            color: "white",
          }}
        >
          How are you feeling today?
        </h1>
        {/* <h3
          style={{
            fontWeight: "bolder",
            fontStyle: "normal",
            color: "white",
            fontFamily: "Arial",
          }}
        >
          
        </h3> */}
      </div>

      <FooterName />
    </section>
  );
}

export default FooterName;
