import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      
      <ul>
        <li>
          <NavLink to="/welcome" activeClassName={classes.clicked}>Welcome</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName={classes.clicked}>Products</NavLink>
        </li>
      </ul>
    </header>
  );
}
