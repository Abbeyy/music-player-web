import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => (
  <ul>
    <li>
      <Link to="/">Welcome</Link>
    </li>
    {/* <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li> */}
  </ul>
);

export default NavigationBar;
