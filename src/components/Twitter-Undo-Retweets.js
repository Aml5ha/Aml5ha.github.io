import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import TwitterUndoDemo from "../assets/demos/TwitterUndoRetweets.mp4"

const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>Twitter: Undo Retweets and Likes</h2>
        <h3>There's not real way to undo your retweets and favorites on twitter right? Why not script it your own way!</h3>
        <justify> <p> 
        When I first started applying for jobs I realized that if anyone trying to recruit me saw my twitter, they would be met with an overwhelming amount of spongebob memes and pictures of cars.
        So, I set out to figure out the best way to clean up my twitter without having to delete it or make it private. I soon found out that there is no way to do that! Thus, I had the idea of creating a way that will help in cleaning up my twitter by undoing my recent retweets.
        The program uses Selenium with python to log to launch a session of twitter. After entering the login information, the program logs in and navigates to the user's twitter page at which point it asks for number of seconds to scroll.
        The program then scrolls for the entered amount of time and searches for "undoretweet buttons" and trys to click them.  
          <br/> <center> Check out the code for it on my <a target = "_blank" href="https://github.com/Aml5ha/TwitterUndoRetweetsAndLikes"> {" "} github</a>! </center>
        </p> </justify>

        <center> <b> See it in action! </b></center>

     <center>
       <video width="800" autoPlay muted loop> 
          <source src={TwitterUndoDemo} type="video/mp4"/> 
       </video>
      </center>



      </div>
    </div>
  </section>
);

export default Portfolio;
