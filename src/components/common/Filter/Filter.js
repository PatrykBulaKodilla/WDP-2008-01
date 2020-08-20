import React from 'react';
import styles from './Filter.module.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      activeIndex: 0,
    };
  }

  toggleClass(index, e) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div>
        <p className={styles.title}>FILTER BY CATEGORIES</p>
        <div className={styles.line}></div>
        <div>
          <ul>
            <li
              className={this.state.activeIndex === 0 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 0)}
            >
              <p>&gt; Furniture</p>
              <div className={this.state.activeIndex === 0 ? 'active' : null}>3</div>
            </li>
            <li
              className={this.state.activeIndex === 1 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 1)}
            >
              <p>&gt; Sofa</p>
              <div className={this.state.activeIndex === 1 ? 'active' : null}>4</div>
            </li>
            <li
              className={this.state.activeIndex === 2 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 2)}
            >
              <p>&gt; Chair</p>
              <div className={this.state.activeIndex === 2 ? 'active' : null}>4</div>
            </li>
            <li
              className={this.state.activeIndex === 3 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 3)}
            >
              <p>&gt; Table</p>
              <div className={this.state.activeIndex === 3 ? 'active' : null}>5</div>
            </li>
            <li
              className={this.state.activeIndex === 4 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 4)}
            >
              <p>&gt; Bedroom</p>
              <div className={this.state.activeIndex === 4 ? 'active' : null}>5</div>
            </li>
            <li
              className={this.state.activeIndex === 5 ? 'active' : null}
              onClick={this.toggleClass.bind(this, 5)}
            >
              <p>&gt; Furniture</p>
              <div className={this.state.activeIndex === 5 ? 'active' : null}>5</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
