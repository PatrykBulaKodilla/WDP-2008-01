export const getAll = ({ categoriesGallery }) => categoriesGallery;
export const getProduct = ({ products }) => products;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
