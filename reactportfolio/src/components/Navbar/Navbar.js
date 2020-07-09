import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Thompson Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/bio"
              className={window.location.pathname === "/bio" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
            <Link
              to="/bio"
              className={window.location.pathname === "/bio" ? "nav-link active" : "nav-link"}
            >
              Bio/Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
