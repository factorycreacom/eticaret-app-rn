/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import useAxios from 'axios-hooks';
import Product from '../components/Product';
import {IProductInterface, IProductTiming} from '../models/Product.interface';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AppConfig from '../../config';
import {useDispatch} from 'react-redux';
import {BASKET_ACTIONS} from '../models/actions.types';
import Layout from '../components/Layout';
import moment from 'moment';
import timingData from '../themes/data.json';
import NotFoundData from '../components/NotFoundData';
const HomePage = () => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState<IProductInterface[]>([]);
  const [{data, loading, error}] = useAxios<IProductInterface[], any, any>(
    `${AppConfig.BASE_URL}/products`,
  );

  const [{data: timingData2, loading: timingLoading, error: timingError}] =
    useAxios<IProductTiming[], any, any>(
      `${AppConfig.BASE_URL}/productTimings`,
    );

  const filterization = () => {
    data?.filter(product => {
      const _timing = timingData?.find(timing => {
        return timing?.productId && timing.productId === product.id;
      });
      const utc = moment.utc();
      const currentTime = moment(utc).local().format(AppConfig.DATE_FORMAT);
      const timeStampStartDate = moment(_timing?.startDate).format(
        AppConfig.DATE_FORMAT,
      );
      const timeStampEndDate = moment(_timing?.endDate).format(
        AppConfig.DATE_FORMAT,
      );
      const compare = moment(currentTime).isBetween(
        timeStampStartDate,
        timeStampEndDate,
      );
      if (_timing && compare) {
        setFilteredData([...filteredData, product]);
      }
    });
  };

  useEffect(() => {
    if (timingData && data) {
      filterization();
    }
  }, [data, timingData]);

  const keyExtractors = useCallback((item: IProductInterface) => {
    return item.id.toString();
  }, []);

  const renderItem = useCallback((props: {item: IProductInterface}) => {
    return <Product product={props.item} onPress={handleProductClick} />;
  }, []);

  const handleProductClick = (product: IProductInterface) => {
    dispatch({
      type: BASKET_ACTIONS.ADD_BASKET,
      payload: product,
    });
  };

  return (
    <Layout>
      <>
        {loading || (timingLoading && <Loading />)}
        {error || (timingError && <Error error={error || timingError} />)}
        {filteredData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractors}
            data={filteredData}
            removeClippedSubviews={true}
            maxToRenderPerBatch={7}
            initialNumToRender={10}
            renderItem={renderItem}
          />
        ) : (
          <NotFoundData
            message="Filtreye uygun ürün bulunamadı!"
            icon="error-outline"
          />
        )}
      </>
    </Layout>
  );
};

export default HomePage;
