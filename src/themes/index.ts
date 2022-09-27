import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1565c0',
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#1565c0',
  },
};

export {CustomLightTheme, CustomDarkTheme};
