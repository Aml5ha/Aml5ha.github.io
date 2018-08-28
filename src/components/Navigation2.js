import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="javascript:history.back()">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="javascript:history.back()">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="javascript:history.back()">
          Education
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="javascript:history.back()">
          Projects
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="javascript:history.back()">
          Quotes
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="javascript:history.back()">
          Footer
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
