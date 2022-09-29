import React from 'react';
import {Provider} from 'react-redux';
import Navigation from '../navigation';
import store from '../redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Navigation />
        <Toast />
      </>
    </Provider>
  );
};

export default App;
