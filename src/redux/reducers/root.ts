import {combineReducers} from 'redux';
import appSettingsReducer from './Appsettings.reducers';
import basketReducer from './Basket.reducers';

const rootReducer = combineReducers({
  appsettings: appSettingsReducer,
  basket: basketReducer,
});

export default rootReducer;
