import React from 'react';
import Infocards from './Sub-Components/Infocards';
import './event.css'

function Event() {
  const cards = [
    {
      title: "Location Unknown",
      year: "2021",
      duration: "PG • 1hr 38min",
      rating: "4.2/5",
      tags: ["Italian", "Drama", "Indie"],
      description: "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      poster: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
    },
    {
      title: "Air",
      year: "2020",
      duration: "PG • 24min",
      rating: "4/5",
      tags: ["Romance", "Comedy", "Short"],
      description: "Two strangers meet together on a plane flying to the alps.",
      poster: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg"
    },
    {
      title: "End Credits",
      year: "2021",
      duration: "R • 1hr 41min",
      rating: "4.7/5",
      tags: ["Teen", "Comedy", "Drama"],
      description: "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg"
    }
  ];

  const Past = [
    {
      title: "Location Unknown",
      year: "2021",
      duration: "PG • 1hr 38min",
      rating: "4.2/5",
      tags: ["Italian", "Drama", "Indie"],
      description: "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      poster: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
    },
    {
      title: "Air",
      year: "2020",
      duration: "PG • 24min",
      rating: "4/5",
      tags: ["Romance", "Comedy", "Short"],
      description: "Two strangers meet together on a plane flying to the alps.",
      poster: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg"
    },
    {
      title: "End Credits",
      year: "2021",
      duration: "R • 1hr 41min",
      rating: "4.7/5",
      tags: ["Teen", "Comedy", "Drama"],
      description: "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg"
    },
    {
      title: "Air",
      year: "2020",
      duration: "PG • 24min",
      rating: "4/5",
      tags: ["Romance", "Comedy", "Short"],
      description: "Two strangers meet together on a plane flying to the alps.",
      poster: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg"
    },
    {
      title: "End Credits",
      year: "2021",
      duration: "R • 1hr 41min",
      rating: "4.7/5",
      tags: ["Teen", "Comedy", "Drama"],
      description: "Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.",
      poster: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg"
    },
    {
      title: "Location Unknown",
      year: "2021",
      duration: "PG • 1hr 38min",
      rating: "4.2/5",
      tags: ["Italian", "Drama", "Indie"],
      description: "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      poster: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
    }
  ];

  return (
    <div className='Event'>
    <h1 style={{ marginTop: "100px", fontFamily: 'Manrope', fontSize: '40px' ,marginLeft:'40px' }}>Upcoming Events</h1>
    <div className="wrapper" style={{ marginBottom: "100px" }}>
      {cards.map((card, index) => (
        <Infocards key={index} {...card} />
      ))}
    </div>

<h1 style={{ fontFamily: 'Manrope', fontSize: '40px' ,marginLeft:'40px' }}>Past Events</h1>

<div className="wrapper" style={{ marginBottom: "100px" }}>
      {Past.map((card, index) => (
        <Infocards key={index} {...card} />
      ))}
    </div>

</div>
  );
}

export default Event;
