import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

class MenuBar extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={`container  ${styles.container}`}>
          <div className={`row align-items-center ${styles.divContainer}`}>
            <div className={`col ${styles.productSearch}`}>
              <ProductSearch />
              <button
                id={styles.hamburgerMenu}
                className={this.state.active ? 'active' : null}
                onClick={this.toggleClass}
              >
                <span className={styles.hamburgerBox}>
                  <span className={styles.hamburgerInner}></span>
                </span>
              </button>
            </div>
            <div
              id={this.state.active ? 'active' : null}
              className={'col-auto ' + styles.menu}
            >
              <ul>
                <li>
                  <a href='/' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/shop/furniture'>Furniture</a>
                </li>
                <li>
                  <a href='/shop/chair'>Chair</a>
                </li>
                <li>
                  <a href='/shop/table'>Table</a>
                </li>
                <li>
                  <a href='/shop/sofa'>Sofa</a>
                </li>
                <li>
                  <a href='/shop/bedroom'>Bedroom</a>
                </li>
                <li>
                  <a href='/shop/blog'>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
