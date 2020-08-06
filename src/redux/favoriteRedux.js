/* selectors */
export const getAll = ({ favorite }) => favorite.prodects;

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
