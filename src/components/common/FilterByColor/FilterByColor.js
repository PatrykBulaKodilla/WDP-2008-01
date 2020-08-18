import React from 'react';

import styles from './FilterByColor.module.scss';

class FilterByColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: null,
    };
  }

  setActiveColor(newActiveColor) {
    this.setState({ activeColor: newActiveColor });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.filterColorTitle}>
            <p>filter</p>
            <p>by</p>
            <p>color</p>
          </div>
          <div className={styles.filterColor}>
            <div
              className={`${styles.foored} ${
                this.state.activeColor === 'red' ? 'active' : ''
              }`}
              onClick={() => this.setActiveColor('red')}
            >
              <a href='/# '>Red</a>
            </div>
            <div
              className={`${styles.fooblack} ${
                this.state.activeColor === 'black' ? 'active' : ''
              }`}
              onClick={() => this.setActiveColor('black')}
            >
              <a href='/# '>Black</a>
            </div>
            <div
              className={`${styles.fooyellow} ${
                this.state.activeColor === 'yellow' ? 'active' : ''
              }`}
              onClick={() => this.setActiveColor('yellow')}
            >
              <a href='/# '>Yellow</a>
            </div>
            <div
              className={`${styles.fooblue} ${
                this.state.activeColor === 'blue' ? 'active' : ''
              }`}
              onClick={() => this.setActiveColor('blue')}
            >
              <a href='/# '>Blue</a>
            </div>
            <div
              className={`${styles.foopink} ${
                this.state.activeColor === 'pink' ? 'active' : ''
              }`}
              onClick={() => this.setActiveColor('pink')}
            >
              <a href='/# '>Pink</a>
            </div>
            <div
              className={`${styles.foogreen} ${
                this.state.activeColor === 'green' ? 'active' : ''
              }`}
              onClick={() => this.setActiveColor('green')}
            >
              <a href='/# '>Green</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterByColor;
