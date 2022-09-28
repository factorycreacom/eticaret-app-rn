import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import CustomText from './CustomText';

interface IProps {
  message?: string;
  icon?: 'error-outline' | 'error';
}

const NotFoundData = ({
  message = 'Bu veri bulunamadı!',
  icon = 'error',
}: IProps) => {
  const colors = useTheme();
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} color={colors.colors.danger} size={50} />

      <CustomText
        style={{marginTop: theme.Style.margin15}}
        size={14}
        text={message}
      />
    </View>
  );
};

export default NotFoundData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.Style.pageMarginTop * -1,
    flexDirection: 'column',
    textAlign: 'center',
  },
});
