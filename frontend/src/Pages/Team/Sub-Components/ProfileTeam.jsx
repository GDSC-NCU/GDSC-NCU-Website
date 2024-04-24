import React from 'react';
import './profileteam.css';

const ProfileTeam = ({ name, image, linkedin, github, email }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="border">
          <h2>{name}</h2>
          <div className="icons">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTeam;
