import React from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerTop}>
      <nav>
        <ul className={styles.menuOptions}>
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
      <nav className={styles.headerTopUser}>
        <ul className={styles.menuOptions}>
          <li>
            <a href="/admin">Admin</a>
            {/* <Link to="/admin">Admin</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};
