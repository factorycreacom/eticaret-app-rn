import {BASKET_ACTIONS} from '../../models/actions.types';
import {IBasketActions, IBasketState} from '../../models/generic.types';

const initialState: IBasketState = {
  products: [],
};

const basketReducer = (state = initialState, action: IBasketActions) => {
  switch (action.type) {
    case BASKET_ACTIONS.ADD_BASKET:
      return {products: [...state.products, action.payload]};

    case BASKET_ACTIONS.INCREMENT:
      state.products.find(item => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity ? item.quantity + 1 : 1;
        }
      });
      return {products: state.products};

    case BASKET_ACTIONS.DECREMENT:
      const find = state.products.find(item => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity ? item.quantity - 1 : 1;
          if (item.quantity === 0) {
            return item;
          }
        }
      });
      if (find?.quantity === 0) {
        const itemIndex = state.products.findIndex(i => i.id === find.id);
        state.products.splice(itemIndex, 1);
      }

      return {products: state.products};
    default:
      return state;
  }
};

export default basketReducer;
