import {NavigationContainer} from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppConfig from '../../config';
import Loading from '../components/Loading';
import NotFoundData from '../components/NotFoundData';
import Error from '../components/Error';
import {PRODUCTS_ACTIONS} from '../models/actions.types';
import {APP_THEME, ICombineReducer} from '../models/generic.types';
import {IProductInterface} from '../models/Product.interface';
import {theme} from '../themes';
import {DrawerStack} from './Stacs';
const Navigation = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: ICombineReducer) => state.appsettings);
  const [{data, loading, error}] = useAxios<IProductInterface[], any, any>(
    `${AppConfig.BASE_URL}/products`,
  );

  useEffect(() => {
    if (data) {
      dispatch({
        type: PRODUCTS_ACTIONS.ADD,
        payload: data,
      });
    }
  }, [data]);

  const RenderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else if (data?.length) {
      return <DrawerStack />;
    } else if (data?.length && !loading) {
      return (
        <NotFoundData
          message="Filtreye uygun ürün bulunamadı!"
          icon="error-outline"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <NavigationContainer
      theme={
        themeState.theme === APP_THEME.LIGHT
          ? theme.CustomLightTheme
          : theme.CustomDarkTheme
      }>
      <RenderContent />
    </NavigationContainer>
  );
};

export default Navigation;
