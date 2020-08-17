import React from 'react';
import styles from './SuggestedProducts.module.scss';

import HotDeals from '../../common/HotDeals/HotDeals';
import Slider from '../Slider/Slider';
import Swipeable from '../Swipeable/Swipeable';

class SuggestedProducts extends React.Component {
  state = {
    activeDeal: 0,
  };

  handlePageChange(newPage, event) {
    if (event !== undefined) event.preventDefault();
    this.setState({ activeDeal: newPage });
  }

  handleCategoryChange(newCategory, event) {
    if (event !== undefined) event.preventDefault();
    this.setState({ activeCategory: newCategory });
  }

  handleLeftAction(pagesCount) {
    if (this.state.activeDeal < pagesCount - 1) {
      this.handlePageChangeFade(this.state.activeDeal + 1);
    }
  }

  handleRightAction() {
    if (this.state.activeDeal > 0) {
      this.handlePageChangeFade(this.state.activeDeal - 1);
    }
  }

  render() {
    const dots = [];
    const { activeDeal } = this.state;
    const hotDeals = [
      {
        id: 'aenean-ru-bristique-1',
        name: 'Aenean Ru Bristique 1',
        category: 'bed',
        price: 30,
        stars: 3,
        promo: 'sale',
        image:
          'https://scandinavianliving.pl/userdata/public/gfx/9ff052bf0a47985baa8e54ccbc6e832d.jpg',
        newFurniture: true,
        favorite: true,
        comparison: true,
      },
      {
        id: 'aenean-ru-bristique-2',
        name: 'Aenean Ru Bristique 2',
        category: 'bed',
        price: 30,
        stars: 4,
        promo: 'sale',
        image:
          'https://cdn.habitat.fr/thumbnails/product/866/866233/box/1200/1200/80/eskyss-aparador-vitrina-alto-de-nogal_866233.jpg',
        newFurniture: true,
        favorite: true,
        comparison: false,
      },
      {
        id: 'aenean-ru-bristique-3',
        name: 'Aenean Ru Bristique 3',
        category: 'bed',
        price: 30,
        oldPrice: '$35',
        stars: 5,
        promo: 'sale',
        image:
          'https://furniture123.co.uk/files/images/f123/shop-furniture-by-bedroom.jpg',
        newFurniture: true,
        favorite: false,
        comparison: true,
      },
    ];
    const pagesCount = hotDeals.length;

    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={event => this.handlePageChange(i, event)}
            className={i === activeDeal ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`${styles.hotdeals} col col-4`}>
              <div className={styles.panelBar}>
                <div className='row'>
                  <div className='col-8'>
                    <h3 className={styles.heading}>Hot Deals</h3>
                  </div>
                  <div className='col-4'>
                    <div className={styles.menu}>
                      <div className={styles.dots}>
                        <ul>{dots}</ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Swipeable
                leftAction={() => this.handleLeftAction(pagesCount)}
                rightAction={() => this.handleRightAction()}
              >
                {hotDeals.slice(activeDeal, activeDeal + 1).map(elem => (
                  <HotDeals
                    key={elem.id}
                    name={elem.name}
                    price={elem.price}
                    image={elem.image}
                  />
                ))}
              </Swipeable>
            </div>
            <div className={`${styles.slider} col col-12 col-lg-8`}>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedProducts;
