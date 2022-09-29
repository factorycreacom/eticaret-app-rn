import React, {memo, useCallback, useEffect, useState} from 'react';
import Layout from '../components/Layout';
import MasonryList from '@react-native-seoul/masonry-list';
import {IProductDeals, IProductInterface} from '../models/Product.interface';
import AppConfig from '../../config';
import useAxios from 'axios-hooks';
import {useSelector} from 'react-redux';
import {ICombineReducer} from '../models/generic.types';
import Product from '../components/Product';
import useMainRender from '../hooks/useMainRender';
import useHotDealsFilter from '../hooks/useHotDealsFilter';
const HotDealsPage = () => {
  const [selectedProducts, setSelectedProducts] = useState<IProductInterface[]>(
    [],
  );
  const products = useSelector(
    (state: ICombineReducer) => state.products.activeProducts,
  );
  const [{data, loading, error}] = useAxios<IProductDeals[], any, any>(
    `${AppConfig.BASE_URL}/hotdeals`,
  );

  const mainRender = useMainRender({error, loading, data: products});
  const filterization = useHotDealsFilter({products, timings: data});

  useEffect(() => {
    if (Array.isArray(filterization)) {
      setSelectedProducts(filterization);
    }
  }, [filterization]);

  const renderItem = useCallback((props: {item: IProductInterface}) => {
    const random = AppConfig.MASONRY_HEIGHTS.sort(
      () => Math.random() - Math.random(),
    ).slice(0, 1);
    const img = props.item.image.replace('240', random[0].toString());
    const params = {...props.item, image: img};
    return <Product isDeals={true} height={random[0]} product={params} />;
  }, []);

  const keyExtractors = useCallback((product: IProductInterface) => {
    return product.id.toString();
  }, []);

  return (
    <Layout>
      {mainRender === true ? (
        <MasonryList
          data={selectedProducts}
          keyExtractor={keyExtractors}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      ) : (
        mainRender
      )}
    </Layout>
  );
};

export default memo(HotDealsPage);
