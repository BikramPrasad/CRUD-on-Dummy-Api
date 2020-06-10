import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-wrapper red darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          Employee
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/add">
              <i className="material-icons right">person_add</i>Add Employee
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
