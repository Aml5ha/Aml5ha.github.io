import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Arman Lokhandwala.</h1>
      <h3>
        I am currently an Associate <span>Software Engineer</span> at <span>Capital One</span> based in Northern Virginia.
        </h3>
      <h3>
        <a className="smoothscroll" href="#about">
          {" "}
          Start scrolling
        </a>{" "}
        to learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
