import React from "react";
import { Link } from "react-router-dom";
export default function MainHeader() {
  return (
    <ul>
      <li>
        <Link to="/welcome">Welcome</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  );
}