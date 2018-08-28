import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import TwitterList from "../components/Twitter-Unfollow-List";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<TwitterList/>  
  </div>

 )

export default SecondPage;
