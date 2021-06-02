import React from "react";
import { Navbar, Nav } from "react-bootstrap";

// css for heading
const headerSheet = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "32px",
};

// css for navbar links
const subSheet = {
  fontWeight: "bold",
  fontSize: "22px",
  fontFamily: "Arial",
};

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <div style={headerSheet}>M H</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={subSheet}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/psychologist">Psycho</Nav.Link>

            {/* <Nav.Link href="/pricehistory">PriceHistory</Nav.Link> */}

            {/* <Nav.Link href="/quote">Quote</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
