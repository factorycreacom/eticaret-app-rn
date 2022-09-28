import {combineReducers} from 'redux';
import appSettingsReducer from './Appsettings.reducers';
import basketReducer from './Basket.reducers';
import productsReducer from './Products.reducers';

const rootReducer = combineReducers({
  appsettings: appSettingsReducer,
  basket: basketReducer,
  products: productsReducer,
});

export default rootReducer;
