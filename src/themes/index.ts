import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'purple',
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
  },
};

export {CustomLightTheme, CustomDarkTheme};
