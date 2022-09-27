import {createStore} from 'redux';
import appSettingsReducer from './reducers/Appsettings.reducers';

const store = createStore(appSettingsReducer);

export default store;
