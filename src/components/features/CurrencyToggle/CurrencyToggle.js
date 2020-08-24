import React from 'react';
import styles from './CurrencyToggle.module.scss';
import PropTypes from 'prop-types';
import Promotions from '../Promotions/Promotions';

class CurrencyToggle extends React.Component {
  state = {
    defaultValue: 'USD',
  };

  handleCurrency(option, value) {
    this.props.setCurrency(option, value);
  }

  render() {
    const { currencyOptions } = this.props;

    return (
      <select
        className={styles.dropdown}
        onChange={event =>
          this.handleCurrency(event.currentTarget.name, event.currentTarget.value)
        }
      >
        {this.state.defaultValue ? (
          ''
        ) : (
          <option className={styles.position} key='null' value=''>
            USD
          </option>
        )}
        {currencyOptions.map(currency => (
          <option
            className={styles.position}
            name={currency.name}
            key={currency.key}
            value={currency.value}
          >
            {currency.name}
          </option>
        ))}
      </select>
    );
  }
}

CurrencyToggle.propTypes = {
  currencyOptions: PropTypes.array,
  setCurrency: PropTypes.func,
};

export default CurrencyToggle;
