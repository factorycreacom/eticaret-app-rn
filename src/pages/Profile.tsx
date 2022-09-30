import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import CustomText from '../components/CustomText';
import Layout from '../components/Layout';
const ProfilePage = () => {
  return (
    <Layout style={styles.container}>
      <CustomText text="Profile Page coming soon" />
    </Layout>
  );
};

export default memo(ProfilePage);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
