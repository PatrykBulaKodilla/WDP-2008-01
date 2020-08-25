import React from 'react';
import styles from './CurrencyToggle.module.scss';
import PropTypes from 'prop-types';

class CurrencyToggle extends React.Component {
  state = {
    defaultValue: 'USD',
  };

  render() {
    const { currencyOptions, setCurrency } = this.props;

    return (
      <select
        className={styles.dropdown}
        onChange={event => setCurrency(event.currentTarget.value)}
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
            value={currency.name}
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
