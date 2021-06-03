import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div
          className="navbar navbar-inverse navbar-fixed-bottom"
          style={{ justifyContent: "center" }}
        >
          <nav>
            {/* <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul> */}
            <p
              className="copyright text-center"
              style={{
                textAlign: "center",
                padding: "20px 30px 6px 0px",
                color: "white",
                backgroundColor: "#282c34",
              }}
            >
              FullyDeveloped(); ©️ 2021
            </p>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
