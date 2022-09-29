import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Layout = ({children, style}: IProps) => {
  const colors = useTheme();
  return (
    <View
      style={[
        styles.container,
        style && style,
        {backgroundColor: colors.colors.background},
      ]}>
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
