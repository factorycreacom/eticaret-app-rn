import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';
import CustomText from './CustomText';
import InputSpinner from 'react-native-input-spinner';
import {useDispatch} from 'react-redux';
import {BASKET_ACTIONS} from '../models/actions.types';
import Toast from 'react-native-toast-message';

interface IProps {
  product: IProductInterface;
}

const BasketItem = ({product}: IProps) => {
  const colors = useTheme();
  const dispatch = useDispatch();

  const changeQuantity = (type: 'increment' | 'decrement') => {
    dispatch({
      type:
        type === 'decrement'
          ? BASKET_ACTIONS.DECREMENT
          : BASKET_ACTIONS.INCREMENT,
      payload: product,
    });
  };

  const showToast = (type: 'min' | 'max') => {
    Toast.show({
      bottomOffset: 100,
      position: 'bottom',
      type: type === 'max' ? 'error' : 'success',
      text1:
        type === 'max' ? 'Maximum Adete ulaşıldı!' : 'Ürün Sepetten Çıkarıldı!',
      text2:
        type === 'max'
          ? 'Aynı üründen tek seferde en fazla 10 adet alabilirsiniz!'
          : `${product.name} isimli ürün sepetinizden çıkarıldı`,
      onPress: () => Toast.hide(),
    });
  };

  return (
    <View style={[styles.card, {backgroundColor: colors.colors.card}]}>
      <View style={styles.productDetails}>
        <CustomText
          font="medium"
          text={product.name}
          size={theme.Typhograpyh.DealProductTextSize}
        />
        <CustomText text={'Category: ' + product.category} />
        <CustomText
          style={{marginTop: theme.Style.margin10}}
          font="medium"
          color={colors.colors.primary}
          text={'₺ ' + product.price}
          size={theme.Typhograpyh.DealProductTextSize}
        />
      </View>

      <View style={styles.spinnerContainer}>
        <InputSpinner
          height={25}
          max={10}
          min={0}
          step={1}
          colorMax={colors.colors.danger}
          colorMin={colors.colors.gray}
          colorAsBackground={true}
          buttonFontSize={16}
          buttonTextColor={colors.colors.card}
          value={product.quantity}
          onMax={() => showToast('max')}
          onMin={() => showToast('min')}
          onDecrease={() => changeQuantity('decrement')}
          onIncrease={() => changeQuantity('increment')}
        />
      </View>
    </View>
  );
};

export default BasketItem;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: theme.Style.pagePaddings,
    marginHorizontal: theme.Style.pagePaddings,
    borderRadius: theme.Style.productBorderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: theme.Style.margin10 - 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 6,

    elevation: 4,
  },
  productDetails: {
    display: 'flex',
    flex: 3,
    marginRight: theme.Style.margin10,
  },
  spinnerContainer: {
    height: 30,
    flex: 1,
    alignItems: 'flex-end',
  },
});
