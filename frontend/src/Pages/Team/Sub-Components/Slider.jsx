import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import teamtest from '../../../Assets/teamtest.png';
import './Slider.css';

const Slider = () => {
  useEffect(() => {
    const slideCount = $('#slider ul li').length;
    const slideWidth = $('#slider').width(); // Get container width instead of individual slide width
    const slideHeight = $('#slider ul li').height(); // Use individual slide height
    const sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ height: slideHeight }); // Set container height
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');

    const moveLeft = () => {
      $('#slider ul').animate(
        {
          left: +slideWidth,
        },
        200,
        () => {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
        }
      );
    };

    const moveRight = () => {
      $('#slider ul').animate(
        {
          left: -slideWidth,
        },
        200,
        () => {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
        }
      );
    };

    $('a.control_prev').on('click', moveLeft); // Use on() for event binding
    $('a.control_next').on('click', moveRight); // Use on() for event binding

    // Auto-play functionality
    const intervalId = setInterval(moveRight, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="slider" className="slider">
      <a href="#" className="control_next">
        &gt;
      </a>
      <a href="#" className="control_prev">
        &lt;
      </a>
      <ul>
        <li>
          <img src={teamtest} alt="Slide 1" />
        </li>
        <li>
          <img src={teamtest} alt="Slide 2" />
        </li>
        <li>
          <img src={teamtest} alt="Slide 3" />
        </li>
        <li>
          <img src={teamtest} alt="Slide 4" />
        </li>
      </ul>
    </div>
  );
};

export default Slider;
