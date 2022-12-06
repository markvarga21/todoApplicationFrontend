import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="home-title">
        Home
      </Link>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
