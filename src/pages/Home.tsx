import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

const HomePage = () => {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{fontFamily: theme.fonts.medium}}>Omen Tonrem!</Text>
    </View>
  );
};

export default HomePage;
