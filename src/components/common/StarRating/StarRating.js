import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ stars, variant }) => {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(null);

  const colorVariant = variant => {
    switch (variant) {
      case 'dark':
        return '#2a2a2a';
      default:
        return '#d58e32';
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              className={styles.star}
              color={
                ratingValue <= (hover || rating) ? colorVariant(variant) : '#e4e5e9'
              }
              icon={faStar}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              {i} stars
            </FontAwesomeIcon>
          </label>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
  variant: PropTypes.string,
};

export default StarRating;
