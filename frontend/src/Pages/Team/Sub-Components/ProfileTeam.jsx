import React from 'react';
import './profileteam.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ProfileTeam = ({ name, image, linkedin, github, email }) => {
  const cardStyle = {
    // backgroundImage: `url(${image})`,
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}><img src={image} alt={name} />
        <div className="border">
          <h2>{name}</h2>
          <div className="icons">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <IoIosMail />
              </a>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileTeam;
