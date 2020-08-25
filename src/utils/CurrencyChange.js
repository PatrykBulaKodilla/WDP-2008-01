export const currencyChange = (currencyType, price) => {
  if (currencyType === 'USD') {
    return '$ ' + price * 1;
  } else if (currencyType === 'PLN') {
    return price * 3.74 + ' zł';
  } else if (currencyType === 'GBP') {
    return '£ ' + price * 0.76;
  } else if (currencyType === 'JPY') {
    return '¥ ' + price * 105.83;
  } else {
    return '$ ' + price;
  }
};
