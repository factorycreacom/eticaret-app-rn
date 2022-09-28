import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Layout from '../components/Layout';
import MasonryList from '@react-native-seoul/masonry-list';
import {useTheme} from '@react-navigation/native';
import {IProductDeals, IProductInterface} from '../models/Product.interface';
import AppConfig from '../../config';
import useAxios from 'axios-hooks';
import {useSelector} from 'react-redux';
import {ICombineReducer} from '../models/generic.types';
const HotDealsPage = () => {
  const colors = useTheme();
  const [selectedProducts, setSelectedProducts] = useState<IProductInterface[]>(
    [],
  );
  const products = useSelector(
    (state: ICombineReducer) => state.products.products,
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

  setTimeout(() => {
    console.log(selectedProducts.length, products.length);
  }, 3000);

  const RenderContent = () => {
    return (
      <MasonryList
        data={filteredItems}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CardItem />}
        refreshing={isLoadingNext}
        onRefresh={() => refetch({first: ITEM_CNT})}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadNext(ITEM_CNT)}
      />
    );
  };

  return (
    <Layout>
      <Text>sdasdsad</Text>
    </Layout>
  );
};

export default HotDealsPage;
