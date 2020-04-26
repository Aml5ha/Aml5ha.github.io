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

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  
    </div>
 )

export default SecondPage;
