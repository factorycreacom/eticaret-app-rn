import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {theme} from '../themes';
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.Style.pageMarginTop * -1,
  },
});
