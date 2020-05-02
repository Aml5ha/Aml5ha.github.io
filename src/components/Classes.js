import React from 'react';
import {Polar, Doughnut} from 'react-chartjs-2';
// import skillsPic from "../Skills.png";
// <img src={skillsPic} width="2500" height="2500" />

// <p>
//   Check out some of the coolest and most interesting classes I have taken throughout my schooling experience.
// </p>


export default class Skills extends React.Component {
   render () {

  return (
      <section id="skills">
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Relevant Classes</span>
      </h1>
    </div>
    <div className="nine columns main-col">

        <ul className="skills">
          <li>
            <em><h4>Reinforcement Learning</h4> 
             Reinforcement learning (RL) introduced me to a new area of computer science which I have never explored before. Through this class, I was able to apply machine learning and RL concepts on our various projects and homeworks.</em>
          </li>
          <li>
            <em><h4>Algorithms</h4> 
            An essential course as it exposed me to a different persepctive to solving problems.</em>
          </li>
          <li>
            <em><h4>Human Computer Interaction</h4> 
            I particularly enjoyed this course as it helped me realize all of the different aspects that need to be taken into consideration when designing a user interface. </em>
          </li>
          <li>
            <em><h4>Artificial Intelligence</h4> 
             Though this course was less technical than I had hoped, it offered a high level overview of many AI topics. </em>
          </li>
          <li>
            <em><h4>F1/10 Autonomous Race Cars</h4> 
             One of my favorite courses I have taken! I was given the opportunity to work on a hands on project that used real equipment to create an 1/10 scale autonomous race car.</em>
          </li>
          <li>
            <em><h4>Computer Architecture</h4> 
             This was one of my most challenging courses, but it taught me to understand and appreciate the function, organization, and implementation of computer systems. </em>
          </li>
          <li>
            <em><h4>Game Design</h4> 
            A truly worthwhile course. This course introduced me an exciting field in the CS that I always dreamed about as a child. In this course we discussed important game design concepts and also underwent our own design process, which ultimately resulted in the creation of my own game!  </em>
          </li>
          <li>
            <em><h4>Operating Systems</h4> 
            This class taught me the importance of low level code and how operating systems work. </em>
          </li>
        </ul>
    </div>

  </div>





  </section>
  );
  }
}
