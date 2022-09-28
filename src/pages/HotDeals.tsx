import React from 'react';
import {Text} from 'react-native';
import Layout from '../components/Layout';
import MasonryList from '@react-native-seoul/masonry-list';
const HotDealsPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default HotDealsPage;
