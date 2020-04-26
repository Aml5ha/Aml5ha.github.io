import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";


import ThesisPDF from "../assets/Final_Portfolio.pdf"


const Portfolio = () => (
  <section id="portfolio"> 
    <div className="row">
      <div className="twelve columns collapsed">
        <h2>Senior Capstone and Thesis:  <h1>Compression Aware Algorithms
          <br/> an Investigation of the Relationship between Moore’s Law and the Data Congestion Problem</h1> 
        </h2>
		<h3>Moore's Law? Never heard of him. And we don't need to if we focus on Compression Aware Algorithms!</h3>
        <p> 
        This year-long capstone project revolved around conducting research and experiments supporting the importance of Compression Aware Algorithms. Essentially, compression aware algorithms are algorithms that recognize and operate on compressed data. The benefits of switching to compression aware algorithms are significant time and space speedups when compared to using standard algorithms, which are not optimized to run on compressed data.
        <br/> 
        <br/>
        My year long thesis was an investigation of the relationship between Moore’s Law and the data congestion problem, which is inherintely related to my capstone. Turns out that the Moore's Law has always answered to the recurring data congestion problem. However, with Moore's Law slowing down, scientists and society alike need to focus on better software, hence compression aware algorithms, rather than better hardware (as Moore's Law has always provided). 

          <br/> <center> Read more about it in my <a target='_blank' href={ThesisPDF}> {" "} paper</a>!</center>
        </p>


	  </div>
    </div>

  </section>
);

export default Portfolio;
