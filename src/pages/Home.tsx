/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {memo, useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import useAxios from 'axios-hooks';
import Product from '../components/Product';
import {IProductInterface, IProductTiming} from '../models/Product.interface';
import AppConfig from '../../config';
import {useDispatch, useSelector} from 'react-redux';
import {PRODUCTS_ACTIONS} from '../models/actions.types';
import Layout from '../components/Layout';
import timingData from '../themes/data.json'; // Static Dummy timing data
import {ICombineReducer, Nav} from '../models/generic.types';
import useMainRender from '../hooks/useMainRender';
import useProductFilterTiming from '../hooks/useProducFilterTiming';
import NotFoundData from '../components/NotFoundData';
import {useNavigation} from '@react-navigation/native';
const HomePage = () => {
  const [showNotfound, setShowNotfund] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<Nav>();
  const products = useSelector(
    (state: ICombineReducer) => state.products.products,
  );
  const activeProducts = useSelector(
    (state: ICombineReducer) => state.products.activeProducts,
  );

  const [{data: timingData2, loading: timingLoading, error: timingError}] =
    useAxios<IProductTiming[], any, any>(
      `${AppConfig.BASE_URL}/productTimings`,
    );

  const mainrender = useMainRender({
    error: timingError,
    loading: timingLoading,
    data: activeProducts,
  });

  const filterization = useProductFilterTiming({
    products,
    timings: timingData2,
  });

  useEffect(() => {
    if (filterization) {
      setShowNotfund(false);
      dispatch({
        type: PRODUCTS_ACTIONS.ADD_ACTIVE_PRODUCTS,
        payload: filterization,
      });
    } else {
      setShowNotfund(true);
    }
  }, [filterization]);

  const renderItem = useCallback((props: {item: IProductInterface}) => {
    return (
      <Product
        product={props.item}
        toastClick={() => navigation.navigate('Basket')}
      />
    );
  }, []);

  const keyExtractors = useCallback((product: IProductInterface) => {
    return product.id.toString();
  }, []);

  const RenderContent = useCallback(() => {
    if (showNotfound) {
      return (
        <NotFoundData message="Bu tarihte uygun veri bulunamadı. Lütfen API'yi kontrol edin" />
      );
    }
    if (mainrender === true) {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractors}
          data={activeProducts}
          removeClippedSubviews={true}
          maxToRenderPerBatch={7}
          initialNumToRender={10}
          renderItem={renderItem}
        />
      );
    } else {
      return mainrender;
    }
  }, [activeProducts, showNotfound, mainrender]);

  return (
    <Layout>
      <RenderContent />
    </Layout>
  );
};

export default memo(HomePage);
