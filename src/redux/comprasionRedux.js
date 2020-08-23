/* selectors */

export const getCompare = ({ compare }) => compare;

/* action name creator */

const reducerName = 'compare';
const CreateActionName = name => `app/${reducerName}/${name}`;

/* action types */

export const ADD_COMPARE = CreateActionName('ADD_COMPARE');
export const REMOVE_COMPARE = CreateActionName('REMOVE_COMPARE');
export const REMOVE_ALL = CreateActionName('REMOVE_ALL');

/* action creators */

export const createActionAddToCompare = payload => ({
  payload,
  type: ADD_COMPARE,
});
export const createActionRemoveFromCompare = payload => ({
  payload,
  type: REMOVE_COMPARE,
});
export const createActionRemoveAllFromCompare = payload => ({
  payload,
  type: REMOVE_ALL,
});

/* reducer */

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case REMOVE_COMPARE:
      return [...state.filter(elem => elem !== action.payload.product)];
    case ADD_COMPARE:
      if (
        state.length < 8 &&
        state.filter(elem => elem.id === action.payload.id).length === 0
      ) {
        return [
          ...state,
          {
            name: action.payload.name,
            id: action.payload.id,
            image: action.payload.image,
            category: action.payload.category,
            price: action.payload.price,
            oldprice: action.payload.oldPrice,
            stars: action.payload.stars,
            promo: action.payload.promo,
          },
        ];
      } else {
        return [...state];
      }
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
}
