import React, { useState } from "react";

import logo from "../img/Netflix_logo.svg.png";

const NavBarMOBILE = () => {
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);

  const [contador, setContador] = useState(0);

  const handlerMenuMobile = () => {
    setContador(contador + 1);

    if (contador % 2 === 0) {
      setActiveMenuMobile(!false);
    } else {
      setActiveMenuMobile(false);
    }
  };

  return (
    <div className="main-container_navBarMOBILE">
      <section className="container-logo-explore">
        <div className="logo-netflix_container">
          <img src={logo} alt="" />
        </div>

        <div className="explore-buttonDownArrow-container d-flex justify-content-between">
          <h6 className="explore-menu text-white">Explore</h6>
          <article
            className="menuMOBILE-downArrow-container"
            onClick={() => handlerMenuMobile()}
          >
            <i className="fa-solid fa-sort-down"></i>
          </article>
        </div>
      </section>

      <nav className="nav-menuMobile">
        <ul
          className={`ul-menuMobile ${
            activeMenuMobile ? "show-menuMobile" : ""
          }`}
        >
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
    </div>
  );
};

export default NavBarMOBILE;
