/* selectors */
export const getCurrencyDropdown = ({ currencyType }) => currencyType.currency;

/* action name creator */
const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */

const SET_CURRENCY = createActionName('SET_CURRENCY');

export const setCurrency = (payload, value) => ({ payload, value, type: SET_CURRENCY });

/* reducer */

export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_CURRENCY: {
      return {
        ...statePart,
        option: {
          name: action.payload,
          value: action.value,
        },
      };
    }
    default:
      return statePart;
  }
}
