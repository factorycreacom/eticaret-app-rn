import moment from 'moment';
import {useEffect, useState} from 'react';
import AppConfig from '../../config';
import {IProductInterface, IProductTiming} from '../models/Product.interface';

interface IProps {
  products: IProductInterface[];
  timings: IProductTiming[] | undefined;
}

const useProductFilterTiming = ({products, timings}: IProps) => {
  const [filtered, setFiltered] = useState<IProductInterface[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(products)) {
      products?.filter(product => {
        const _timing = timings?.find(timing => {
          return timing?.productId && timing.productId === product.id;
        });
        const utc = moment.utc();
        const currentTime = moment(utc).local().format(AppConfig.DATE_FORMAT);
        const timeStampStartDate = moment(_timing?.startDate).format(
          AppConfig.DATE_FORMAT,
        );
        const timeStampEndDate = moment(_timing?.endDate).format(
          AppConfig.DATE_FORMAT,
        );
        const compare = moment(currentTime).isBetween(
          timeStampStartDate,
          timeStampEndDate,
        );
        if (_timing && compare) {
          setFiltered(old => [...old, product]);
        }
      });
      setCompleted(true);
    }
  }, [products, timings]);

  if (completed && filtered.length) {
    return filtered;
  } else if (completed && !filtered.length) {
    return false;
  }
};

export default useProductFilterTiming;
