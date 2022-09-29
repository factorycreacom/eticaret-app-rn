import {useEffect, useState} from 'react';
import {IProductDeals, IProductInterface} from '../models/Product.interface';

interface IProps {
  products: IProductInterface[];
  timings: IProductDeals[] | undefined;
}
const useHotDealsFilter = ({products, timings}: IProps) => {
  const [state, setState] = useState<IProductInterface[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    products.filter(product => {
      const prod = timings?.find(item => {
        return item.productId === product.id ? true : false;
      });
      if (prod) {
        setState(old => [...old, product]);
      }
    });
    setCompleted(true);
  }, [products, timings]);

  if (completed && state.length) {
    return state;
  } else if (completed && !state.length) {
    return false;
  }
};

export default useHotDealsFilter;
