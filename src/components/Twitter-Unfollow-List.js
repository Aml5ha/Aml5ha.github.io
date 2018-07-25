import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import TwitterUnfollowDemo from "../assets/demos/TwitterUnfollowListVideo.mp4"
const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>Twitter: Unfollow List</h2>
        <h3>It's always heartbreaking to see who doesn't follow you back. Providing an easy way to see who to unfollow 😈</h3>
        <p> 
        These days there is a stigma of having an imbalanced following to followers ratio. 
        This program lets you efficiently and easily see who you follow but doesnt follow you back.
        This project was done using Selenium with python to launch a session of twitter. 
        After the login credentials are entered, the program navigates to the user's following page. 
        Then, whenever a user does not have a "Follow you" tag next to their handle, their name is printed to a file.
        
        <br/> <center> Check out the code for it on my <a target = "_blank" href="https://github.com/Aml5ha/TwitterUnfollowList"> {" "} github</a>! </center>
        </p> 

        <center> <b> See it in action! </b></center>

       
       <center>
       <video width="800" autoPlay muted loop> 
          <source src={TwitterUnfollowDemo} type="video/mp4"/> 
       </video>
      </center>


      </div>
    </div>
  </section>
);

export default Portfolio;
