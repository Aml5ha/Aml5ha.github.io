import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">

  	<li>
      <a target="_blank" href="https://www.facebook.com/ArmanMLokhandwala">
        <FaFacebook />
      </a>
    </li>

    <li>
      <a target="_blank" href="https://twitter.com/Browniebro97">
        <FaTwitter />
      </a>
    </li>

  	<li>
      <a target="_blank" href="mailto:armanlokhandwala@gmail.com" >
        <FaEnvelope />
      </a>
    </li>


    <li>
      <a target="_blank" href="https://github.com/Aml5ha">
        <FaGithub />
      </a>
    </li>

    <li>
      <a target="_blank" href="https://www.linkedin.com/in/arman-lokhandwala/">
        <FaLinkedin />
      </a>
    </li>
    


   

  </ul>
);

export default SocialLinks;
