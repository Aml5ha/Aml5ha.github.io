import React from "react";
import skillsPic from "../Skills.png";


const Skills = () => (

  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>
    <div className="nine columns main-col">
      <p>
        With the help of my college career and two internships thus far, I have aquired various technical skills.
        Though my ability to perform is not limited by the presented skills, the graphic below shows a high level overview of the technical areas I have had exposure to. 
        See also the most relevant and interesting courses that I have taken. 
      </p>

        <ul className="skills">
          <li>
            <em>Algorithms - An essential course as it exposed me to a different persepctive to solving problems.</em>
          </li>
          <li>
            <em>Human Computer Interaction - I particularly enjoyed this course as it helped me realize all of the different aspects that need to be taken into considering when designing a user interface. </em>
          </li>
          <li>
            <em>Artificial Intelligence - Though this course was less technical than I had hoped, it offered a high level overview of many AI topics. </em>
          </li>
          <li>
            <em>F1/10 Autonomous Race Cars - One of my favorite courses I have taken! I was given the opportunity to work on a hands on project that used real equipment to create an 1/10 scale autonomous race car.</em>
          </li>
          <li>
            <em>Computer Architecture - This was one of my most challenging courses, but it taught me to understand and appreciate the function, organization, and implementation of computer systems. </em>
          </li>
          <li>
            <em>Game Design - A truly worthwhile course. This course introduced me an exciting field in the CS that I always dreamed about as a child. In this course we discussed important game design concepts and also underwent our own design process, which ultimately resulted in the creation of my own game!  </em>
          </li>
        </ul>
      <img src={skillsPic} width="2500" height="2500" />
    </div>
  </div>
);

export default Skills;
