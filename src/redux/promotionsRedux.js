/* selectors */
export const getPromotions = ({ promotions }) => promotions;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
