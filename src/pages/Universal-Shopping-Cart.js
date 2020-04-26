import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import HCI from "../components/Hci";


import Navigation from "../components/Navigation2";
import Banner from "../components/Banner";
import ScrollDown from "../components/ScrollDown";

const SecondPage = () => (
  <div>
    <Navigation />
    <ScrollDown />
	<HCI/>  
  </div>

 )

export default SecondPage;
