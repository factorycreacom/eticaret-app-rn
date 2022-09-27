import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {theme} from '../themes';
import CustomText from './CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDrawerStatus} from '@react-navigation/drawer';

interface IHeaderTitle {
  title: string;
}

const HeaderTitle = ({title}: IHeaderTitle) => {
  const ref = useRef<any>(null);
  useFocusEffect(
    useCallback(() => {
      ref.current?.fadeInLeft(400);
    }, []),
  );

  return (
    <Animatable.View ref={ref}>
      <CustomText
        font="bold"
        text={title}
        size={theme.Typhograpyh.HeaderTextSize}
      />
    </Animatable.View>
  );
};

const HeaderRightIcon = () => {
  const {colors} = useTheme();
  const ref = useRef<any>(null);
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';

  useFocusEffect(
    useCallback(() => {
      ref.current?.fadeInRight(400);
    }, []),
  );

  const onPressBtn = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <TouchableOpacity
      activeOpacity={theme.Style.activeOpacity}
      onPress={onPressBtn}>
      <Animatable.View ref={ref}>
        <MaterialIcons
          name={!isDrawerOpen ? 'menu' : 'menu-open'}
          color={colors.text}
          size={theme.Typhograpyh.headerIconSize}
          style={{marginRight: 20}}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export {HeaderTitle, HeaderRightIcon};
