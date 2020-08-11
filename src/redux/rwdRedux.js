/* selectors */
export const getRwdMode = ({ rwd }) => rwd.mode;

/* action name creator */
const reducerName = 'rwd';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */
const SET_RWD_MODE = createActionName('SET_RWD_MODE');

/* action creator */
export const setRwdMode = payload => ({ payload, type: SET_RWD_MODE });

/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_RWD_MODE: {
      return {
        ...statePart,
        mode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
