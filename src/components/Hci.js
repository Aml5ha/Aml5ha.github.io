import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";


import RaceCar from "../assets/images/portfolio/RaceCar.jpg";
import doc from "../assets/Universal_Shopping_Cart_Design_Document.pdf"

const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>Universal Shopping Cart</h2>
		<h3>Prototyping the online application the world needs and deserves</h3>
        <p> 
        This project was extremely insightful as it showed me the importance of design. 
        My team and I started this project with an end goal of inventing a web application where consumers can manage all of their online shopping needs. 
        Rather than spending a lot of time on the technical specifications needed to stand up the application itself, we focused on the design aspect by creating a full-fledged design document.
        Removing the stressers of developing, I was able to focus my time and energy on learning first hand the processes of thorough design, an invaluable experience for industry.
          <br/> <center> Check it out <a target='_blank' href={doc}> {" "} here</a>!</center>
        </p>


	  </div>
    </div>

  </section>
);

export default Portfolio;
