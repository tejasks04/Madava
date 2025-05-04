import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/madhava.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top shadow nav-main">
      <div className="container-fluid">
        {/* Brand and toggler in a flex row */}
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link className="navbar-brand d-flex align-items-center" to="/home">
            <img src={logo} alt="Logo" width="40" height="40" className="me-2 logo" />
            <div className="d-flex flex-column madhav-name">
              <span className="madhav-name-main">Madhava Kumar M</span>
              <span className="madhav-name-sub">Architect</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapsible nav links */}
        <div className="collapse navbar-collapse justify-content-end mt-2 mt-lg-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
