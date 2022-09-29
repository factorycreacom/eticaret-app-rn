/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppConfig from '../../config';
import {PRODUCTS_ACTIONS} from '../models/actions.types';
import {APP_THEME, ICombineReducer} from '../models/generic.types';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';
import {DrawerStack} from './Stacs';
import useMainRender from '../hooks/useMainRender';
const Navigation = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: ICombineReducer) => state.appsettings);
  const [{data, loading, error}] = useAxios<IProductInterface[], any, any>(
    `${AppConfig.BASE_URL}/products`,
  );

  const mainrender = useMainRender({
    error: error,
    loading: loading,
    data: data,
  });

  useEffect(() => {
    if (Array.isArray(data)) {
      dispatch({
        type: PRODUCTS_ACTIONS.ADD,
        payload: data,
      });
    }
  }, [data]);

  return (
    <NavigationContainer
      theme={
        themeState.theme === APP_THEME.LIGHT
          ? theme.CustomLightTheme
          : theme.CustomDarkTheme
      }>
      {mainrender === true ? <DrawerStack /> : mainrender}
    </NavigationContainer>
  );
};

export default Navigation;
