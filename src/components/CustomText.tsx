import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {theme} from '../themes';

interface IProps {
  children?: React.ReactNode;
  text?: string;
  style?: StyleProp<TextStyle>;
  font?: 'medium' | 'regular' | 'bold';
  size?: number;
  color?: string;
  numberOfLines?: number;
}

const CustomText = ({
  children,
  text,
  style,
  font = 'regular',
  size = theme.Typhograpyh.TextSize,
  color,
  numberOfLines = 1,
}: IProps) => {
  const {colors} = useTheme();
  color = color || colors.text;
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[style, theme.Fonts[font], {fontSize: size, color: color}]}>
      {text || children}
    </Text>
  );
};

export default CustomText;
