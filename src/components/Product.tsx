import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';
import CustomText from './CustomText';

interface IProduct {
  product: IProductInterface;
  onPress: (product: IProductInterface) => void;
  height?: number;
}

const Product = ({product, height = 200, onPress}: IProduct) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.imageContainer, {height}]}
        onPress={() => onPress(product)}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: product.image}}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <CustomText
            font="regular"
            text={product.name}
            size={theme.Typhograpyh.ProductTextSise}
          />
        </View>

        <CustomText
          font="bold"
          size={theme.Typhograpyh.ProductTextSise}
          text={product.price}
        />
      </View>
    </View>
  );
};

export default memo(Product);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: theme.Style.margin15,
  },
  imageContainer: {
    paddingHorizontal: theme.Style.margin15,
    borderRadius: theme.Style.productBorderRadius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.43,
    shadowRadius: 7,

    elevation: 7,
  },
  image: {
    height: '100%',
    borderRadius: theme.Style.productBorderRadius,
  },
  textContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  nameContainer: {
    display: 'flex',
    flex: 1,
    marginRight: 20,
  },
});
