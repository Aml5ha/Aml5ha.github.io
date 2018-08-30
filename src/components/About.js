import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/HeadShot.png";
import doc from "../assets/Arman_Lokhandwala_Resume.pdf"


const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          As mentioned before, I am <span>Arman Lokhandwala</span>, and I'm currently studying <span>Computer Science</span> at the University of Virginia in Charlottesville, VA. 
          I am a determined individual who enjoys working on teams and am interested in software development and design. I am a firm believer that the advancement of technology will help better the quality of life of those around the world.  
          <br/> <br/>
          
          My passions include technology, cars, games, science and astronomy, psychology, teaching, and most importantly, helping people by empowering them. 
          In my free time I like to research cars to learn how new technologies are being implemented in them. I also enjoy playing and learning about new games, video games and board games alike! 
          As far as science, astronomy, and psychology go, I try to stay up to date by reading articles and watching videos/documentaries. 
          Lastly, I strive to help people everyday by being a role model and offering to help teach them anything I have to offer - whether it be academic or life skills. 

          <br/> <br/>

          Check out some of my favorite quotes in the  
          <a className="smoothscroll" href="#quotes">
          {" "}
          quotes
          </a>{" "}
          section!
       
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
              <span> armanlokhandwala@gmail.com </span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a target='_blank' href={doc} className="button" >
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
