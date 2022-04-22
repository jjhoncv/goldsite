import * as React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export const Header = () => {
  return (
    <header className="header-top">
      <nav className="header-top-menu">
        <ul className="menu-options">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            Categorys
            <ul>
              <li>
                <Link to={"/categorie/men"}>Men</Link>
              </li>
              <li>
                <Link to={"/categorie/boy"}>Boy</Link>
              </li>
              <li>
                <Link to={"/categorie/girl"}>Girl</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="header-top-user">
        <ul className="menu-options">
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
