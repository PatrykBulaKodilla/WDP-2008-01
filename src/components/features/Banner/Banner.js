import React from 'react';
import styles from './Banner.module.scss';

class Banner extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`${styles.banner}`}>
            <div className={styles.photo}>
              <div className={styles.panel}>
                <div className={styles.descriptionTitle}>
                  <p>Bedroom</p>
                  <p>furniture</p>
                </div>
                <div className={styles.descriptionSubitle}>
                  <p>Always</p>
                  <p className={styles.percent}>25%</p>
                  <p>of or more</p>
                </div>
              </div>
            </div>
            <div className={styles.path}>
              <ul>
                <li>
                  <a href='# '>Home</a>
                </li>
                <li>
                  <a href='# '>{'>'}</a>
                </li>
                <li>
                  <a href='# ' className={styles.furnitureActive}>
                    Furniture{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
