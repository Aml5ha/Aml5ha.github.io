import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/HeadShot.png";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          As mentioned before, I am <span>Arman Lokhandwala</span>, and I currently studying <span>Computer Science</span> at the University of Virginia in Charlottesville, VA. 
          I am a determined individual who enjoys working on teams and am interested in software development and design. I am firm believer that the advancement of technology will help better the quality of life of those around the world.  
        </p>

        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Arman Lokhandwala</span>
              <br />
              <span>
              Richmond, VA 23060 US
              </span>
              <br />
              <span>(804)-503-4088</span>
              <br />
              <span>armanlokhandwala@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
