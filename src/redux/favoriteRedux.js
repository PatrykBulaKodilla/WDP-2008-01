/* selectors */
export const getAllFavorites = ({ favorite }) => favorite.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAVORITE_PRODUCT = createActionName('SET_FAVORITE_PRODUCT');

/* action creators */
export const setFavoriteProduct = payload => ({ payload, type: SET_FAVORITE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_FAVORITE_PRODUCT: {
      if (statePart.products.filter(elem => elem === action.payload).length > 0) {
        return {
          ...statePart,
          products: [...statePart.products.filter(elem => elem !== action.payload)],
        };
      }
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
