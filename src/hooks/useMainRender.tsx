import {AxiosError} from 'axios';
import React from 'react';
import {View} from 'react-native';
import Error from '../components/Error';
import Loading from '../components/Loading';
import NotFoundData from '../components/NotFoundData';
interface IProps {
  error: AxiosError<any, any> | null | any;
  loading: boolean | any;
  data: any[] | undefined | 'basket-empty';
}

const useMainRender = ({error, loading, data}: IProps) => {
  if (Array.isArray(data)) {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else if (Array.isArray(data) && data.length) {
      return true;
    } else if (!Array.isArray(data) && !loading) {
      return (
        <NotFoundData
          message="Filtreye uygun ürün bulunamadı!"
          icon="error-outline"
        />
      );
    } else {
      return <View />;
    }
  } else {
    if (data === 'basket-empty') {
      return (
        <NotFoundData
          message="Sepetinizde ürün bulunamadı, Alışverişin tadını çıkartın!"
          icon="error-outline"
        />
      );
    } else {
      return <View />;
    }
  }
};

export default useMainRender;
