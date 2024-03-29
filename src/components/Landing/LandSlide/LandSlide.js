import React from 'react';
import PropTypes from 'prop-types';
import './LandSlide.css';

const propTypes = {
  url: PropTypes.string.isRequired
};

const LandSlide = ({ id, url, sliderMealImage }) => {
  return (
    <div className="landslide">
      <img src={url} />
    </div>
  );
};

export default LandSlide;
