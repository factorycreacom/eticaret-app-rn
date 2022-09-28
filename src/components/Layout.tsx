import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({children}: IProps) => {
  const colors = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: colors.colors.background}]}>
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
