import React from 'react';
import '../App.css';
import LOGO from '../Assets/logo.png';
import './Header.css';


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
