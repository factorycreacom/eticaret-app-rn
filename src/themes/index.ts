import {DarkTheme, DefaultTheme, ExtendedTheme} from '@react-navigation/native';
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      primary_light: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      gray: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

const CustomLightTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1565c0',
    primary_light: '#5e92f3',
    gray: '#616161',
  },
};

const CustomDarkTheme: ExtendedTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#1565c0',
    primary_light: '#5e92f3',
    gray: '#f5f5f5',
  },
};

export {CustomLightTheme, CustomDarkTheme};
