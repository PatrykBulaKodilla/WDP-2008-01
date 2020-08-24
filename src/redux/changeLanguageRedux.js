/* selectors */
export const getLanguage = ({ language }) => language;

/* action name creator */
const reducerName = 'language';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_LANGUAGE = createActionName('SET_LANGUAGE');

/* action creators */
export const setLanguage = payload => ({ payload, type: SET_LANGUAGE });

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_LANGUAGE: {
      if (statePart.language.filter(elem => elem === action.payload).length > 0) {
        return {
          ...statePart,
          language: [...statePart.language.filter(elem => elem !== action.payload)],
        };
      }
      return {
        ...statePart,
        language: [...statePart.language, action.payload],
      };
    }
    default:
      return statePart;
  }
}
