import React, {memo, useCallback, useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import BasketButton from '../components/BasketButton';
import BasketItem from '../components/BasketItem';
import Checkout from '../components/Checkout';
import Layout from '../components/Layout';
import useMainRender from '../hooks/useMainRender';
import {ICombineReducer} from '../models/generic.types';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';

const BasketPage = () => {
  const basketState = useSelector((state: ICombineReducer) => state.basket);
  const modalizeRef = useRef<Modalize>(null);
  const insets = useSafeAreaInsets();

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

  const calculateTotal = () => {
    let sum = 0;

    for (const value of basketState.products) {
      const q = value.quantity ? value.quantity : 1;
      sum += Number(value.price) * q;
    }
    return sum.toFixed(2).toString();
  };

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
            <BasketButton
              text="Continue"
              total={calculateTotal()}
              onPress={() => modalizeRef.current?.open()}
            />
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
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={false}
        modalTopOffset={insets.top + 130}>
        <Checkout />
      </Modalize>
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
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingLeft: theme.Style.margin15,
    paddingRight: theme.Style.margin15,
  },
});
