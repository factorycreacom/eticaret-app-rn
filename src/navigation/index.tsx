import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {APP_THEME, IAppSettingsState} from '../models/generic.types';
import {CustomLightTheme, CustomDarkTheme} from '../themes';
import {DrawerStack} from './Stacs';
const Navigation = () => {
  const theme = useSelector((state: IAppSettingsState) => state.theme);

  return (
    <NavigationContainer
      theme={theme === APP_THEME.LIGHT ? CustomLightTheme : CustomDarkTheme}>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default Navigation;
