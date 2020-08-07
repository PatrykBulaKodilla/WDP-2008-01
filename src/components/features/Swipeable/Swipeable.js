import React from 'react';
import PropTypes from 'prop-types';

class Swipeable extends React.Component {
  state = {
    positionStart: 0,
    positionEnd: 0,
    swipeDirection: '',
  };

  handleTouchStart = event => {
    this.setState({ positionStart: event.touches[0].clientX });
    this.setState({ positionEnd: event.touches[0].clientX });
  };

  handleTouchMove = event => {
    this.setState({ positionEnd: event.touches[0].clientX });
  };

  handleTouchEnd = () => {
    if (this.state.positionEnd <= this.state.positionStart * 0.9) {
      this.setState({ swipeDirection: 'right' });
      console.log(this.state.swipeDirection);
    } else if (this.state.positionEnd >= this.state.positionStart * 1.1) {
      this.setState({ swipeDirection: 'left' });
      console.log(this.state.swipeDirection);
    } else {
      this.setState({ swipeDirection: '' });
    }
  };

  render() {
    return (
      <div
        onTouchStart={event => this.handleTouchStart(event)}
        onTouchMove={event => this.handleTouchMove(event)}
        onTouchEnd={() => this.handleTouchEnd()}
      >
        {this.props.children}
      </div>
    );
  }
}

Swipeable.propTypes = {
  children: PropTypes.node,
};

export default Swipeable;
