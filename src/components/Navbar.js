import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({ setAccessToken }) => {
  const logoutUser = () => {
    setAccessToken("");
    console.log("User logged out!");
  };
  return (
    <nav className="nav">
      <Link to="/" className="home-title">
        Home
      </Link>
      <ul>
        <Link onClick={logoutUser} to="/logout">
          Logout
        </Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
