import React from 'react';
import PropTypes from 'prop-types';

class Swipeable extends React.Component {
  state = {
    positionStart: 0,
    positionEnd: 0,
  };

  handleTouchStart = event => {
    this.setState({ positionStart: event.touches[0].clientX });
    this.setState({ positionEnd: event.touches[0].clientX });
  };

  handleTouchMove = event => {
    this.setState({ positionEnd: event.touches[0].clientX });
  };

  handleTouchEnd = () => {
    if (this.state.positionEnd <= this.state.positionStart * 0.8) {
      this.props.leftAction();
    } else if (this.state.positionEnd >= this.state.positionStart * 1.2) {
      this.props.rightAction();
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
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
