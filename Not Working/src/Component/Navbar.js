import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #e0e0e0",
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#007bff",
  };

  const brandStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#007bff",
  };

  return (
    <nav style={navbarStyle}>
      <div style={brandStyle}>MyApp</div>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
