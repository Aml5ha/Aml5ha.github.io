import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import SortNum1 from "../assets/images/portfolio/SortNum1.png";
import SortNum2 from "../assets/images/portfolio/SortNum2.png";
import SortNum3 from "../assets/images/portfolio/SortNum3.png";
import SortNum4 from "../assets/images/portfolio/SortNum4.png";
import SortNum5 from "../assets/images/portfolio/SortNum5.png";

const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>SortNum</h2>
        <h3>The numbers are falling, the numbers are falling! The math Gods are angry and are throwing down some wicked numbers! Help the character shield himself from the numbers for as long as you can!</h3>
        <p> 
        I am particularly proud of this project because it was the first time I had the opportunity to intertwine my passion for video games and coding in a classroom setting.
        This project was made using Unity Game Engine and C#, both of which I had never heard of before! Leading a team of 4, my group and I refined my original design of SortNum and developed a finished product!
		<br/> <br/>
        <h3> Takeaways</h3>
        This project taught me a lot about the process of <i> creating</i> a 'product'. Reflecting back, this experience helped me adapt quicker when I was placed on an actual product team for CarMax (summer 2018).
        I never realized how much documentation and steps go into the planning and design process, all of which is done before any code is ever written!
        Alongside learning skills such as C# and Unity Game Engine, I had the chance to develop my leadership abilities.
        My group consisted of different personalities and though I oftentimes had to seek advice from my professor, I am grateful for the experience of how it feels to lead a 'difficult' team. 
        
        <br/> <center> Check out the code for it on my <a target = "_blank" href="https://github.com/Aml5ha/SortNum"> {" "} github</a>! </center>
        </p> 
        <center> <b>Check out some screenshots from the game!</b></center>
        <br/>


       <div className="columns portfolio-item">
            <div className="item-wrap">
                <img width = "200" alt="" src={SortNum1} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Title Screen</h5>
                    User can either jump right in or see the instructions via a tutorial
                  </div>
                </div>
             
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
                <img width = "200" alt="" src={SortNum3} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Tutorial Screen</h5>
                    This is the view the player sees if they click "Instructions"
                  </div>
                </div>
              
            </div>
          </div>
          
          
  		<div className="columns portfolio-item">
            <div className="item-wrap">
                <img width = "200" alt="" src={SortNum4} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Game Play</h5>
                    Instructions from tutorial disappear once player reaches 1000+ points
                  </div>
                </div>
             
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
                <img width = "200" alt="" src={SortNum5} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Double Points Mode</h5>
                    Colors are inverted to show a change of mode. All points earned are double for 10 seconds
                  </div>
                </div>
              
            </div>
          </div>

            <div className="columns portfolio-item">
            <div className="item-wrap">
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  </div>
                </div>
            </div>
          </div>




      </div>
    </div>
  </section>
);

export default Portfolio;
