import React from 'react';
import PropTypes from 'prop-types';

const Swipeable = props => {
  let positionStart = 0;
  let positionEnd = 0;
  let swipeDirection;

  const handleTouchStart = event => {
    positionStart = event.touches[0].clientX;
  };

  const handleTouchMove = event => {
    positionEnd = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (positionEnd <= positionStart * 0.9) {
      swipeDirection = 'right';
      console.log(swipeDirection);
    } else if (positionEnd >= positionStart * 1.1) {
      swipeDirection = 'left';
      console.log(swipeDirection);
    }
  };

  return (
    <div
      onTouchStart={event => handleTouchStart(event)}
      onTouchMove={event => handleTouchMove(event)}
      onTouchEnd={() => handleTouchEnd()}
    >
      {console.log(props)}
      {props.children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
};

export default Swipeable;
