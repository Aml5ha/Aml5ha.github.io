import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Capstone from "../components/Senior-Portfolio";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<Capstone/>  
  </div>

 )

export default SecondPage;
