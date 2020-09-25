import React from "react";

import NavBarButton from "./NavBarButton";

import "./navbar.scss";

const NavBarMenu = () => {
  return (
    <div className="navbar-right">
      <ul className="navbar-right-list">
        <NavBarButton
          link="/loans-list"
          class="loan"
          content="Prestamos solicitados"
        />
        <NavBarButton link="/home" class="home" content="Solicitar prestamo" />
      </ul>
    </div>
  );
};

export default NavBarMenu;
