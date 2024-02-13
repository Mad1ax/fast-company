import React from "react";
import { Link } from "react-router-dom";
// import MainPage from "../layouts/mainPage";
// import LoginPage from "../layouts/loginPage";
// import Users from "./users";

const NavBar = () => {
  return (
    <nav className="nav">
      <li className="nav-item">
        <Link className='nav-link' to="/">Main</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/loginPage">Login</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/users">Users</Link>
      </li>
    </nav>
  );
};

export default NavBar;
