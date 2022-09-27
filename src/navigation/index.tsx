import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {APP_THEME, IAppSettingsState} from '../models/generic.types';
import {theme} from '../themes';
import {DrawerStack} from './Stacs';
const Navigation = () => {
  const themeState = useSelector((state: IAppSettingsState) => state);

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
