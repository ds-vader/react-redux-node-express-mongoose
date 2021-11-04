import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const reducers = combineReducers({
  productsPage: productReducer,
  cartPage: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
