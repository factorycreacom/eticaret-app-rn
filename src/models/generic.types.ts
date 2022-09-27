import {APP_SETTINGS_ACTIONS} from './actions.types';

enum APP_THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

interface IAppSettingsState {
  theme: APP_THEME;
}

interface IAppSettingsActions {
  type: APP_SETTINGS_ACTIONS;
  payload: APP_THEME;
}

export {APP_THEME};
export type {IAppSettingsState, IAppSettingsActions};
