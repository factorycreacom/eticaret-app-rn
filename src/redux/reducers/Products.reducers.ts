import {PRODUCTS_ACTIONS} from '../../models/actions.types';
import {IProductActions, IProductsState} from '../../models/generic.types';

const initialState: IProductsState = {
  products: [],
  activeProducts: [],
};

const productsReducer = (state = initialState, action: IProductActions) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.ADD:
      return {products: action.payload};

    case PRODUCTS_ACTIONS.ADD_ACTIVE_PRODUCTS:
      return {activeProducts: action.payload};
    default:
      return state;
  }
};

export default productsReducer;
