import React from "react";

import "./navbar.scss";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img
          src={process.env.PUBLIC_URL + "/moni-logo.svg"}
          alt="moni-logo"
          className="navbar-left-logo"
        />
      </div>
      <div className="navbar-right">
        <NavBarMenu />
      </div>
    </div>
  );
};

export default NavBar;
