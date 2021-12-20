/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const toggleClass = navToggle
    ? "collapse navbar-collapse in"
    : "collapse navbar-collapse";
  const toggleStyle = navToggle ? { display: "block" } : { display: "none" };
  const background = navBackground ? "scroll-background" : "";
  const container = navBackground ? "container-fluid" : "container";

  useEffect(() => {
    const scrollNav = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight - 200) {
          setNavBackground(true);
        } else {
          setNavBackground(false);
        }
      });
    };
    scrollNav();
  }, []);

  return (
    <div className={`fixed-top ${container}`}>
      <nav className={`navbar navbar-expand-lg navbar-dark ${background}`}>
        <div className="nav-bar container">
          <a className="navbar-brand" href="#">
            <h1 className="fw-bold">Abdo.</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={navToggle}
            aria-label="Toggle navigation"
            onClick={() => setNavToggle(!navToggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={toggleClass}
            style={toggleStyle}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutMe">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
