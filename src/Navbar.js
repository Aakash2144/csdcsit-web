import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src="https://srkrec.edu.in/img/csd/csd_header.jpg"/></div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="btn btn-primary">Admission Open</button>
    </nav>
  );
};

export default Navbar;
