import React from "react";
import {
  Sidebar,
  DropdownItem,
  Icon,
  Item,
  Logo,
  LogoText,
} from "react-sidebar-ui";
import { BrowserRouter, Link } from "react-router-dom";
import "./Sidebar.css";

const SideNav = () => {
  return (
    <div>
      <Sidebar bgColor="black" isCollapsed={false}>
        <Logo
          image="https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif"
          imageName="react logo"
        />
        <br />
        <LogoText>Mental Health Dashboard</LogoText>
        {/* <DropdownItem values={["First", "Second", "Third"]} bgColor={"black"}>
          Menu
        </DropdownItem> */}
        <br />
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-home" />
          </Icon>
          <Link
            to="/"
            style={{ paddingLeft: 13, textDecoration: "none", color: "orange" }}
          >
            Home
          </Link>
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-info" />
          </Icon>
          <Link
            to="/psychologist"
            style={{ paddingLeft: 13, textDecoration: "none", color: "orange" }}
          >
            Psychologist
          </Link>
        </Item>

        {/* to remove */}
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-info" />
          </Icon>
          <Link
            to="/dashboard"
            style={{ paddingLeft: 13, textDecoration: "none", color: "orange" }}
          >
            To test user profile
          </Link>
        </Item>
        {/* <Item bgColor="black">
          <Icon>
            <i className="fas fa-sitemap" />
          </Icon>
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="far fa-address-book" />
          </Icon>
          Contacts
        </Item>
        <Item bgColor="black">
          <Icon>
            <i className="fas fa-rss-square" />
          </Icon>
          Blog
        </Item>
        <InputItem type="text" placeholder={"Search..."} /> */}
      </Sidebar>
    </div>
  );
};

export default SideNav;
