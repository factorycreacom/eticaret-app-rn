import {useTheme} from '@react-navigation/native';
import {AxiosError} from 'axios';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomText from './CustomText';

interface IProps {
  error: AxiosError<any, any> | null;
}

const Error = ({error}: IProps) => {
  const colors = useTheme();
  console.log(error);
  return (
    <View style={styles.container}>
      <CustomText
        text="Bir Hata oluştu!"
        color={colors.colors.danger}
        font="bold"
        size={15}
      />

      <CustomText
        style={{marginTop: 20}}
        text={error?.code + ' - ' + error?.message}
      />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
