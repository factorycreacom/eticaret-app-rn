import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';
import MasonryList from '@react-native-seoul/masonry-list';
import {useTheme} from '@react-navigation/native';
import {IProductDeals, IProductInterface} from '../models/Product.interface';
import AppConfig from '../../config';
import useAxios from 'axios-hooks';
import {useSelector} from 'react-redux';
import {ICombineReducer} from '../models/generic.types';
import Product from '../components/Product';
const HotDealsPage = () => {
  const colors = useTheme();
  const [selectedProducts, setSelectedProducts] = useState<IProductInterface[]>(
    [],
  );
  const products = useSelector(
    (state: ICombineReducer) => state.products.activeProducts,
  );
  const [{data, loading, error}] = useAxios<IProductDeals[], any, any>(
    `${AppConfig.BASE_URL}/hotdeals`,
  );

  useEffect(() => {
    if (data) {
      products.filter(product => {
        const prod = data.find(item => {
          return item.productId === product.id ? true : false;
        });

        if (prod) {
          console.log(prod);
          setSelectedProducts(_selectedProducts => [
            ..._selectedProducts,
            product,
          ]);
        }
      });
    }
  }, [data]);

  const RenderItem = (props: {item: IProductInterface}) => {
    const random = AppConfig.MASONRY_HEIGHTS.sort(
      () => Math.random() - Math.random(),
    ).slice(0, 1);
    console.log('rnd', random[0]);
    const img = props.item.image.replace('240', random[0].toString());
    const params = {...props.item, image: img};
    console.log(params);
    return <Product height={random[0]} product={params} onPress={() => null} />;
  };

  const RenderContent = () => {
    return (
      <MasonryList
        data={selectedProducts}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(props: {item: IProductInterface}) => (
          <RenderItem item={props.item} />
        )}
      />
    );
  };

  return (
    <Layout>
      <RenderContent />
    </Layout>
  );
};

export default HotDealsPage;
