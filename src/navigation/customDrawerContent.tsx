import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const CustomDrawerContent = () => {
  const theme = useTheme();

  return (
    <SafeAreaView>
      <Text style={{color: theme.colors.primary}}>
        DrawerContentComponentProps
      </Text>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
