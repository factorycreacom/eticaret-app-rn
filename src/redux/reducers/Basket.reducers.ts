import {BASKET_ACTIONS} from '../../models/actions.types';
import {IBasketActions, IBasketState} from '../../models/generic.types';

const initialState: IBasketState = {
  products: [],
};

const basketReducer = (state = initialState, action: IBasketActions) => {
  switch (action.type) {
    case BASKET_ACTIONS.ADD_BASKET:
      return {products: [...state.products, action.payload]};
    default:
      return state;
  }
};

export default basketReducer;
