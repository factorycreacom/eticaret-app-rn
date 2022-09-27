import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from '../navigation';
import {CustomDarkTheme, CustomLightTheme} from '../themes';

const App = () => {
  return (
    <NavigationContainer theme={CustomLightTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
