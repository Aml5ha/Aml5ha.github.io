import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import RaceCar from "../assets/images/portfolio/RaceCar.jpg";

const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>F1/10 Autonomous Race Cars</h2>
        <h3>Exploring the technologies needed to build, drive, and race a 1/10 scale autonomous car.</h3>
        <p> 
        Considering my deep passion for cars I felt overjoyed throughout the entire project. 
        Coordinating with 3 other members, we aimed to develop the fastest and most efficient autonomous race car we could! 
        While learning about the principles of perception, planning, and control I had the opportunity to learn and use robot operating system (ROS),
        integrate various sensors (IMU, Cameras, LIDAR) on an embedded computer, and implement algorithms for localization, mapping, path planning, and control. 
          <br/> <center> Check out our team's blog <a target = "_blank" href="https://anarvekar.github.io/index.html"> {" "} here</a>! </center>
          <center> Check out an article my team was featured on <a target = "_blank" href="https://news.virginia.edu/content/racing-students-unique-course-put-self-driving-cars-final-test"> {" "} here</a>! </center>
        </p>

        <center> <b> A picture of me with the car after succesfully programming the lidar. </b></center>

        <br/>
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="overlay">
            <div className="item-wrap">
                <img alt="A 1/10 scale autonomous race car" src={RaceCar} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  </div>
                </div>
            </div>
          </div>



        </div>
      </div>


    </div>
  </section>
);

export default Portfolio;
