import React from 'react';
import '../App.css';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <br />
      <ul className="social_icon">
        <li><a href="#" target="_blank"><FaLinkedin /></a></li>
        <li><a href="#" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
        <li><a href="#" target="_blank" rel="noreferrer"><IoIosMail /></a></li>
      </ul>
      <br />
      <p className="foot">Dive into the hustle</p>
    </footer>
  );
};

export default Footer;
