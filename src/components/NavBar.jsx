import React from "react";

// import NavBarMOBILE from "../components/NavBarMOBILE";

import logo from "../img/Netflix_logo.svg.png";

const NavBar = () => {
  return (
    <div className="main-container_navBarDESKTOP d-flex">
      <div className="logo-netflix_container">
        <img src={logo} alt="" />
      </div>

      <nav className="navDESKTOP-container">
        <ul className="d-flex justify-content-around">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">TV Shows</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">New & Popular</a>
          </li>
          <li>
            <a href="">My List</a>
          </li>
          <li>
            <a href="">Watch Again</a>
          </li>
        </ul>
      </nav>

      {/* <section className="NavBarMOBILE-container" style={{ display: "none" }}>
        <NavBarMOBILE />
      </section> */}
    </div>
  );
};

export default NavBar;
