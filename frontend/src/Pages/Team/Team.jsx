import React, { useState } from 'react';
import ProfileTeam from './Sub-Components/ProfileTeam';
import './team.css';
import $ from 'jquery';
import teamtest from '../../Assets/teamtest.png';
import Slider from './Sub-Components/Slider';
import Ltest from '../../Assets/Ltest.png';
import test2 from '../../Assets/test2.jpg';


const AnimatedHeader = ({ text }) => {
  const [animatedText, setAnimatedText] = useState(text); // Use useState

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const startEffect = () => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      setAnimatedText(prevText =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const stopEffect = () => {
    clearInterval(interval);
    setAnimatedText(text); // Reset text
  };

  return (
    <h1 className='t-head' onMouseOver={startEffect} onMouseOut={stopEffect}>
      {animatedText}
    </h1>
  );
};

const ParentComponent = () => {
  // Array of member details
  const CoreMembers = [
    {
      name: 'John Doe',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'johndoe@example.com',
    },
    {
      name: 'Jane Smith',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    }
  ];

  const coordinators = [
    {
      name: 'John Doe',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'johndoe@example.com',
    },
    {
      name: 'Jane Smith',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'John Doe',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'johndoe@example.com',
    },
    {
      name: 'Jane Smith',
      image: Ltest,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    },
    {
      name: 'Jane Smith',
      image: test2,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'janesmith@example.com',
    }
  ];

  return (
    <div className='Team'>
<Slider />
      {/* <div className="main-image">
        <img alt='team' src={teamtest} className='teammain'></img>
      </div> */}
      <div className="teamtext" style={{ marginBottom: "30px" }}>

    <AnimatedHeader text="Our Team" style={{ marginBottom: "40px" }} />
      <h1 className='t-sub' style={{ marginBottom: "60px" }}>Presenting our passionate team for Google Developer Students Club NCU 2023-2024</h1>

      <AnimatedHeader text="Core Team" />    
      </div>

      <div className="coremembers" style={{ marginBottom: "120px" }}>
        {CoreMembers.map((member, index) => (
          <ProfileTeam
            key={index}
            name={member.name}
            image={member.image}
            linkedin={member.linkedin}
            github={member.github}
            email={member.email}
          />
        ))}
      </div>

<h1  className='teamsectext'><AnimatedHeader text="Coordinators" /></h1>

<br />
<div className="coordinators" style={{ marginBottom: "80px" }}>
        {coordinators.map((member, index) => (
          <ProfileTeam
            key={index}
            name={member.name}
            image={member.image}
            linkedin={member.linkedin}
            github={member.github}
            email={member.email}
          />
        ))}
</div>

    </div>
  );
};

export default ParentComponent;
