import * as React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export const HeaderAdmin = () => {
  return (
    <header className="header-top">
      <nav className="header-top-menu">
        <ul className="menu-options">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            Products
            <ul>
              <li>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/products/new">Product new</Link>
              </li>
            </ul>
          </li>
          <li>
            Categories
            <ul>
              <li>
                <Link to="/admin/categories">Categories</Link>
                <Link to="/admin/categories/new">Categorie new</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="header-top-user">
        <ul className="menu-options">
          <li>
            <Link to="/admin/me">Jhonnatan</Link>
          </li>
          <li>
            <Link to="/">Salir</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
