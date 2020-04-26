import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import SortNum from "../components/SortNum";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<SortNum/>  
  </div>

 )

export default SecondPage;
