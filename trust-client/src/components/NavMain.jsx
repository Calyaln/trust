import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink exact to="/add">
        ajouter
      </NavLink>
      <NavLink exact to="/search">
        rechercher
      </NavLink>
      <NavLink exact to="/info">
        m'informer
      </NavLink>
      <NavLink exact to="/friends">
        ma communauté
      </NavLink>
    </nav>
  );
};

export default NavMain;
