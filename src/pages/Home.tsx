import {useTheme} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import useAxios from 'axios-hooks';
import Product from '../components/Product';
import {IProductInterface} from '../models/Product.interface';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AppConfig from '../../config';
import {useDispatch} from 'react-redux';
import {BASKET_ACTIONS} from '../models/actions.types';
const HomePage = () => {
  const colors = useTheme();
  const dispatch = useDispatch();
  const [{data, loading, error}] = useAxios<IProductInterface[], any, any>(
    `${AppConfig.BASE_URL}/products`,
  );

  const keyExtractors = useCallback((item: IProductInterface) => {
    return item.id.toString();
  }, []);

  const renderItem = useCallback((props: {item: IProductInterface}) => {
    return <Product product={props.item} onPress={handleProductClick} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProductClick = (product: IProductInterface) => {
    dispatch({
      type: BASKET_ACTIONS.ADD_BASKET,
      payload: product,
    });
  };

  return (
    <View
      style={[styles.container, {backgroundColor: colors.colors.background}]}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractors}
          data={data}
          removeClippedSubviews={true}
          maxToRenderPerBatch={7}
          initialNumToRender={10}
          renderItem={renderItem}
        />
      )}

      {}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
