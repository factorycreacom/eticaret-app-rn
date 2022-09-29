import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../themes';
import CustomText from './CustomText';

interface IProps {
  text: string;
  total: string;
  onPress: () => void;
}

const BasketButton = ({text, total, onPress}: IProps) => {
  const colors = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={theme.Style.activeOpacity}
      onPress={() => onPress()}
      style={[styles.container, {backgroundColor: colors.colors.primary}]}>
      <View style={styles.textArrea}>
        <CustomText
          text={text}
          color={colors.colors.background}
          size={theme.Typhograpyh.HeaderTextSize - 6}
        />
      </View>

      <View
        style={[
          styles.totalPricingArea,
          {backgroundColor: colors.colors.background},
        ]}>
        <CustomText
          text={`₺ ${total}`}
          size={theme.Typhograpyh.HeaderTextSize - 6}
          font="medium"
        />
      </View>
    </TouchableOpacity>
  );
};

export default BasketButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.Style.productBorderRadius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 4,
    opacity: 0.7,
  },
  totalPricingArea: {
    maxWidth: 120,
    minWidth: 80,
    alignItems: 'flex-end',
    borderTopRightRadius: theme.Style.productBorderRadius,
    borderBottomRightRadius: theme.Style.productBorderRadius,
    justifyContent: 'center',
    padding: 16,
  },
  textArrea: {
    paddingLeft: 16,
  },
});
