/* selectors */
export const getAllFavorites = ({ favorite }) => favorite.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

/* action creators */

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    default:
      return statePart;
  }
}
