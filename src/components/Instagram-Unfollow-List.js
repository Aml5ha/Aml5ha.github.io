import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import InstagramDemo from "../assets/demos/InstagramUnfollowList.mp4"


const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>Instagram: Unfollow List</h2>
        <h3>It's always heartbreaking to find out when someone you follow doesn't follow you back. </h3>
        <p> 
        This idea is similar my other project: <a href="Twitter-Unfollow-List"> {" "} Twitter: Unfollow List</a>. Here's how it works: Selenium with python is used to launch a session of Instagram.
        After the login credentials are entered, the program navigates to the user's page and extracts the number of following and followers. 
        The program then clicks on the followers link to see who you follow and does the same with the following button on the user's page.  
        The program finishes by comparing the two lists (followers vs following) and prints the Instagram handles that don't follow you back to a file.
        <br/> <br/>
        <h3> Takeaways</h3>
        Unlike twitter however, Instagram doesn't indicate who follows you when looking at your following list.
        This small change introduced many challenges for me while developing. One of the most interesting finds while debugging was figuring out that the instagram UI doesn't always accurately show your followers/following. 
        For instance, I tested my program with 3 different account: one with ~ 50 followers, another with ~135 followers, and the last with ~550 followers.
        The account with the smallest number of followers worked flawlessly and as expected. 
        The second account, for some reason, displayed one more than the actual number of people following. This was confirmed by me manually counting each follower as well as using Control+Find to see how many people the account was "Following". 
        The last account found 1 more follower than what was displayed by the UI. 
        There is a work around for this bug in the code but I am currently trying to figure out why that issue persists. 
        Instagram's popup window of followers and following also posed as a challenge, as I was having difficulty trying to scroll down all the way to load all the followers/following.         
        <br/> <center> Check out the code for it on my <a target = "_blank" href="https://github.com/Aml5ha/InstagramUnfollowList"> {" "} github</a>! </center>
        </p> 

        <center> <b> See it in action! </b></center>
      

      <center>
       <video width="800" autoPlay muted loop> 
         <source src={InstagramDemo} type="video/mp4"/> 
       </video>
      </center>



      </div>
    </div>
  </section>
);

export default Portfolio;
