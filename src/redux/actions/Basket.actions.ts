import {BASKET_ACTIONS} from '../../models/actions.types';

export const addBasket = () => ({
  type: BASKET_ACTIONS.ADD_BASKET,
  payload: 1,
});

export const removeBasket = () => ({
  type: BASKET_ACTIONS.REMOVE_BASKET,
  payload: 0,
});
