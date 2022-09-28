import {
  APP_SETTINGS_ACTIONS,
  BASKET_ACTIONS,
  PRODUCTS_ACTIONS,
} from './actions.types';
import {IProductInterface} from './Product.interface';

enum APP_THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

interface IAppSettingsState {
  theme: APP_THEME;
}

interface IBasketState {
  products: IProductInterface[];
}
interface IProductsState {
  products: IProductInterface[];
  activeProducts: IProductInterface[];
}

interface IAppSettingsActions {
  type: APP_SETTINGS_ACTIONS;
  payload: APP_THEME;
}

interface IBasketActions {
  type: BASKET_ACTIONS;
  payload: IProductInterface;
}

interface IProductActions {
  type: PRODUCTS_ACTIONS;
  payload: IProductInterface[];
}

interface IAppConfig {
  BASE_URL: string;
  IMAGE_BASE_URL: string;
  DATE_FORMAT: 'YYYY-MM-DD HH:mm:ss' | 'DD-MM-YY HH:mm:ss';
  MASONRY_HEIGHTS: number[];
}

interface ICombineReducer {
  appsettings: IAppSettingsState;
  basket: IBasketState;
  products: IProductsState;
}

export {APP_THEME};
export type {
  IAppSettingsState,
  IAppSettingsActions,
  IAppConfig,
  IBasketState,
  IBasketActions,
  IProductActions,
  ICombineReducer,
  IProductsState,
};
