import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import categoriesGalleryReducer from './categoriesGalleryRedux';
import galleryPhotosReducer from './photosGalleryRedux';
import productsReducer from './productsRedux';
import favoriteReducer from './favoriteRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  categoriesGallery: categoriesGalleryReducer,
  galleryPhotos: galleryPhotosReducer,
  products: productsReducer,
  favorite: favoriteReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
