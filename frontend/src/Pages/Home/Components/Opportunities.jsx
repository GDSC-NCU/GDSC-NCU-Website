import React from 'react';
import './opp.css';
import googleAnimation from '../../../Assets/googleanimation.gif';

function Opportunities() {
  return (
    <div>
      <img className='oppimg' alt='' src={googleAnimation} />
      <div className="para">
        <h1 className='opp'>Opportunities</h1>
        <p className='opp-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium commodi vero reiciendis impedit nostrum corporis odio nam, repudiandae hic, perferendis iure excepturi, maxime rem aliquam qui quae sint vel temporibus nulla. Tempore vero, reprehenderit unde facilis nihil dicta distinctio ab fuga delectus magnam nesciunt atque, numquam obcaecati voluptatibus minus! Iure.</p>
      </div>
    </div>
  );
}

export default Opportunities;
