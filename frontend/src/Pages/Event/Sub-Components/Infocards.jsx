import React from 'react';
import './info.css'

function Infocards({ title, year, duration, rating, tags, description, poster }) {
  return (
    <div className="card">
      <div className="poster">
        <img src={poster} alt={title} />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <h2>{year} • {duration}</h2>
        <div className="rating">
          <span>{rating}</span>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
}

export default Infocards;
