/* selectors */
export const getRwdMode = ({ rwd }) => rwd.mode;

/* action name creator */
const reducerName = 'rwd';
const createActionName = name => `app/${reducerName}/${name}`;
