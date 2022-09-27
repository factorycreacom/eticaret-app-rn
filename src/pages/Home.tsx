import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import CustomText from '../components/CustomText';

const HomePage = () => {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <CustomText text="banane" />
    </View>
  );
};

export default HomePage;
