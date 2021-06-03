import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import therapy from "./therapy.gif";
// css for heading
const headerSheet = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "29px",
  fontStyle: "cursive",
};

// css for navbar links
const subSheet = {
  // fontWeight: "bold",
  fontSize: "22px",
  fontFamily: "Arial",
  marginLeft: "auto",
};

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <div style={headerSheet}>
            <img
              src={therapy}
              alt="Stock Market-Logo"
              style={{ width: 120, height: 70, padding: "5px" }}
            />
            Mental Health Dashboard
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={subSheet}>
            <Nav.Link href="/psychologist">Home</Nav.Link>
            {/* <Nav.Link href="/psychologist">Psychology</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard </Nav.Link>
            <Nav.Link href="/login">Login </Nav.Link> */}
            {/* <Nav.Link href="/pricehistory">PriceHistory</Nav.Link> */}

            {/* <Nav.Link href="/quote">Quote</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
