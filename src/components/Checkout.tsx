import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import CustomText from './CustomText';
import Layout from './Layout';
const Checkout = () => {
  return (
    <Layout style={style.container}>
      <CustomText text="Checkout Page coming soon..." />
    </Layout>
  );
};

export default Checkout;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height - 250,
  },
});
