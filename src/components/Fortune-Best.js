import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import FortuneDemo from "../assets/demos/FortuneDemo.mp4"


const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>Fortune Top 100 Places to Work</h2>
        <h3>No better way to kick off recruiting season than by organizing the places you plan to apply to!</h3>
        <p> 
        While talking to some of my colleagues, someone asked me, "Where are you thinking of applying?". Jokingly, I answered, "I'll apply to the Fortune top 100 places to work and hope for the best!". 
        Surely I wasn't serious about applying uninformed, but it got me thinking about how useful it'd be to have all that data. 
        I knew that Fortune was a reliable source and began planning how I would organize the data. 
        For this project, I used an HTML parser called BeautifulSoup in python. Essentially, the program parses the HTML for the first company, extracts data, stores it, and does the same thing for the next 99 companies. 
        The tricky part of this project was learning to use BeautifulSoup, as I had never used it before, and figuring out how exactly to cleanly parse and store the data.
        <br/> <center> Check out the code for it on my <a target = "_blank" href="https://github.com/Aml5ha/Fortune100BestPlacesToWork"> {" "} github</a>! </center>
        </p> 

        <center> <b> See it in action! </b></center>



      <center>
       <video width="800" autoPlay muted loop> 
          <source src={FortuneDemo} type="video/mp4"/> 
       </video>
      </center>


      </div>
    </div>
  </section>
);

export default Portfolio;
