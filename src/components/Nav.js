import React, { useState } from "react";
import "./Nav.css";
import "./../index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
const Nav = () => {
  const [hideNav, setHideNav] = useState("hidden");
  const showMenu = () => {
    console.log("clicked");
    if (hideNav === "hidden") {
      setHideNav("visible");
    } else {
      setHideNav("hidden");
    }
  };
  return (
    <>
      <div className="nav-section">
        <nav className="nav-menu">
          <div className="logo">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
                height="40px"
              />
            </Link>
          </div>
          <div className="nav-links">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/about">
              About
            </Link>
            <Link className="links" to="/services">
              Services
            </Link>
            <Link className="links" to="/blog">
              Blog
            </Link>
            <Link className="links" to="/contact">
              Contact
            </Link>
          </div>
          <div className="bar" onClick={showMenu}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
        </nav>
        <div className="bar-menu" style={{ visibility: `${hideNav}` }}>
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/services">
            Services
          </Link>
          <Link className="links" to="/blog">
            Blog
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
