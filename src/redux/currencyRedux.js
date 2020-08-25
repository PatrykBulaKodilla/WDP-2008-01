/* selectors */
export const getCurrencyDropdown = ({ currencyType }) => currencyType.currency;
export const getCurrency = ({ currency }) => currency.selectedCurrency;

/* action name creator */
const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */

const SET_CURRENCY = createActionName('SET_CURRENCY');

export const setCurrency = payload => ({ payload, type: SET_CURRENCY });

/* reducer */

export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_CURRENCY: {
      return {
        ...statePart,
        selectedCurrency: action.payload,
      };
    }
    default:
      return statePart;
  }
}
