import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import BasketItem from '../components/BasketItem';
import Layout from '../components/Layout';
import useMainRender from '../hooks/useMainRender';
import {ICombineReducer} from '../models/generic.types';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';
const BasketPage = () => {
  const basketState = useSelector((state: ICombineReducer) => state.basket);

  const mainrender = useMainRender({
    error: false,
    loading: false,
    data: basketState.products.length ? basketState.products : 'basket-empty',
  });

  const renderItem = useCallback((props: {item: IProductInterface}) => {
    return <BasketItem product={props.item} />;
  }, []);

  const keyExtractors = useCallback((product: IProductInterface) => {
    return product.id.toString();
  }, []);

  const RenderContent = () => {
    if (mainrender === true) {
      return (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractors}
            data={basketState.products}
            removeClippedSubviews={true}
            maxToRenderPerBatch={7}
            initialNumToRender={10}
            renderItem={renderItem}
          />
          <View style={styles.bottomBar}>
            <Text>sdasd</Text>
          </View>
        </>
      );
    } else {
      return mainrender;
    }
  };
  return (
    <Layout style={styles.container}>
      <RenderContent />
    </Layout>
  );
};

export default memo(BasketPage);

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    marginTop: theme.Style.margin10 - 5,
  },
  bottomBar: {
    borderWidth: 3,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
