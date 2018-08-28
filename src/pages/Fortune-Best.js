import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Fortune from "../components/Fortune-Best";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<Fortune/>  
  </div>

 )

export default SecondPage;
