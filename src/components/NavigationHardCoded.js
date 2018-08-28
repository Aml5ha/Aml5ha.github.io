import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="Aml5ha.github.io">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="Aml5ha.github.io/#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="Aml5ha.github.io/#resume">
          Education
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="Aml5ha.github.io/#portfolio">
          Projects
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="Aml5ha.github.io/#quotes">
          Quotes
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="Aml5ha.github.io/#footer">
          Footer
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
