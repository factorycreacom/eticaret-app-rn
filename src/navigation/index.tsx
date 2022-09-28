import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {APP_THEME, ICombineReducer} from '../models/generic.types';
import {theme} from '../themes';
import {DrawerStack} from './Stacs';
const Navigation = () => {
  const themeState = useSelector((state: ICombineReducer) => state.appsettings);

  return (
    <NavigationContainer
      theme={
        themeState.theme === APP_THEME.LIGHT
          ? theme.CustomLightTheme
          : theme.CustomDarkTheme
      }>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default Navigation;
