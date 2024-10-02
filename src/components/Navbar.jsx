import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand" to="/">Admission Form</Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Admission Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/verify">Verify Admission</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
