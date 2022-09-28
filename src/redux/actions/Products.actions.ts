import {PRODUCTS_ACTIONS} from '../../models/actions.types';

export const addProducts = () => ({
  type: PRODUCTS_ACTIONS.ADD,
  payload: [],
});

export const addActiveProducts = () => ({
  type: PRODUCTS_ACTIONS.ADD_ACTIVE_PRODUCTS,
  payload: [],
});
