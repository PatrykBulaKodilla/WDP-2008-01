/* selectors */
export const getLanguage = ({ language }) => language;

/* action name creator */
const reducerName = 'language';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const CHANGE_LANGUAGE = createActionName('CHANGE_LANGUAGE');

/* action creators */
export const changeLanguage = payload => ({
  payload,
  type: CHANGE_LANGUAGE,
});

/* reducer */
export default function reducer(language = 'English', action = {}) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return language;
  }
}
