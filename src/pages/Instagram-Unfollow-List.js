import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Instagram from "../components/Instagram-Unfollow-List";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<Instagram/>  
  </div>

 )

export default SecondPage;
