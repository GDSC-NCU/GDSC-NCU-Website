import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../Assets/logo.png'; 
import './Header.css';
import '../App.css';
import Event from '../Pages/Event';
import Team from '../Pages/Team';
import RoadMap from '../Pages/RoadMap';
import Blog from '../Pages/Blog';
import About from '../Pages/About';
import Home from '../Pages/Home';


function Header() {
  return (
    <div>
      <header className="page-header">
        <a href="/App">Home</a>
        <a href="/About">About</a>
        <a href="/Event">Event</a>
        <a href="/App"><img alt="logo" src={LOGO} className="logo-img" /></a>
        <a href="/Team">Team</a>
        <a href="/RoadMap">Road Map</a>
        <a href="/Blog">Blog</a>
      </header>
    </div>
  );
}  

export default Header;
