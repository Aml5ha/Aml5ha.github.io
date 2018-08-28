import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import RaceCar from "../components/Autonomous-Race-Cars";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<RaceCar/>  
  </div>

 )

export default SecondPage;
