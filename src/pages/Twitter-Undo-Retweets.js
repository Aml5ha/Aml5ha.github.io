import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Twitter from "../components/Twitter-Undo-Retweets";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<Twitter/>  
  </div>

 )

export default SecondPage;
