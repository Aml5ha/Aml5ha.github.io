import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="http://www.localhost:8000/#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="http://www.localhost:8000/#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="http://www.localhost:8000/#resume">
          Education
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="http://www.localhost:8000/#portfolio">
          Projects
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="http://www.localhost:8000/#testimonials">
          Testimonials
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="http://www.localhost:8000/#footer">
          Footer
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
