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
      danger: string;
    };
    fonts: {
      regular: string;
      medium: string;
      bold: string;
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
    danger: '#CA0B00',
    background: '#ffffff',
  },
  fonts: {
    regular: 'DMSans-Regular',
    medium: 'DMSans-Medium',
    bold: 'DMSans-Bold',
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
    danger: '#CA0B00',
  },
  fonts: {
    regular: 'DMSans-Regular',
    medium: 'DMSans-Medium',
    bold: 'DMSans-Bold',
  },
};

const Fonts = {
  regular: {
    fontFamily: 'DMSans-Regular',
    fontWeight: 'normal' as 'normal',
  },
  medium: {
    fontFamily: 'DMSans-Medium',
    fontWeight: '500' as '500',
  },
  bold: {
    fontFamily: 'DMSans-Bold',
    fontWeight: 'bold' as 'bold',
  },
};

const Typhograpyh = {
  HeaderTextSize: 24,
  TextSize: 12,
  headerIconSize: 24,
  ProductTextSise: 18,
};

const Style = {
  activeOpacity: 0.8,
  pagePaddings: 16,
  pageMarginTop: 25,
  productBorderRadius: 10,
  margin10: 10,
  margin15: 15,
};

export default {CustomLightTheme, CustomDarkTheme, Fonts, Typhograpyh, Style};
