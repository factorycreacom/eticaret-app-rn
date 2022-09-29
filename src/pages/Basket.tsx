import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import BasketItem from '../components/BasketItem';
import Layout from '../components/Layout';
import {ICombineReducer} from '../models/generic.types';
import {theme} from '../themes';
const BasketPage = () => {
  const basketState = useSelector((state: ICombineReducer) => state.basket);
  console.log('BASKETSTATE' + Date.now(), basketState);
  return (
    <Layout style={styles.container}>
      {Array.isArray(basketState.products) &&
        basketState?.products.map(item => {
          return <BasketItem product={item} />;
        })}
    </Layout>
  );
};

export default memo(BasketPage);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: theme.Style.pagePaddings,
    marginTop: theme.Style.margin10 - 5,
  },
});
