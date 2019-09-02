import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Skills from "../components/Skills";


const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Work />
    <Skills/>
    <Portfolio />
    <Quotes />
    <Footer />
  </div>
);

export default IndexPage;
