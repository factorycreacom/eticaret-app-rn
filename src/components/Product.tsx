import {useTheme} from '@react-navigation/native';
import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {BASKET_ACTIONS} from '../models/actions.types';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';
import CustomText from './CustomText';
import Toast from 'react-native-toast-message';
interface IProduct {
  product: IProductInterface;
  height?: number;
  isDeals?: boolean;
  toastClick?: () => void;
}

const Product = ({
  product,
  height = 200,
  isDeals = false,
  toastClick,
}: IProduct) => {
  const colors = useTheme();
  const dispatch = useDispatch();

  const addBasket = () => {
    dispatch({
      type: BASKET_ACTIONS.ADD_BASKET,
      payload: product,
    });
    showToast();
  };

  const showToast = () => {
    Toast.show({
      bottomOffset: 100,
      position: 'bottom',
      type: 'success',
      text1: 'Sepete Eklendi!',
      text2: `${product.name} ürünü sepetinizde!`,
      onPress: () => toastClick && toastClick(),
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.imageContainer, {height}]}
        onPress={addBasket}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: product.image}}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.textContainer,
          isDeals ? styles.textContainerDeals : styles.textContainerProduct,
        ]}>
        <View style={styles.nameContainer}>
          <CustomText
            font="regular"
            text={product.name}
            size={
              isDeals
                ? theme.Typhograpyh.DealProductTextSize
                : theme.Typhograpyh.ProductTextSise
            }
          />
        </View>

        <View style={styles.pricing}>
          <CustomText
            font="bold"
            size={theme.Typhograpyh.ProductTextSise}
            text={product.price}
            color={isDeals ? colors.colors.primary : colors.colors.text}
          />
          {isDeals && (
            <CustomText
              style={{marginLeft: theme.Style.margin10 - 5}}
              font="regular"
              size={theme.Typhograpyh.TextSize}
              text="50% OFF" // Apiden dönen veride burası ile ilgili bir veri bulamadım!
              color={colors.colors.gray}
            />
          )}
        </View>
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
    paddingHorizontal: 25,
  },

  textContainerProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textContainerDeals: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  nameContainer: {
    display: 'flex',
    flex: 1,
    marginRight: 20,
  },
  pricing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
