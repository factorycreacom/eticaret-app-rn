import React, {memo} from 'react';
import CustomText from '../components/CustomText';
import Layout from '../components/Layout';
const BasketPage = () => {
  return (
    <Layout>
      <CustomText>title</CustomText>
    </Layout>
  );
};

export default memo(BasketPage);
