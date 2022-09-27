import {APP_SETTINGS_ACTIONS} from '../../models/actions.types';
import {
  APP_THEME,
  IAppSettingsActions,
  IAppSettingsState,
} from '../../models/generic.types';

const initialState: IAppSettingsState = {
  theme: APP_THEME.LIGHT,
};

const appSettingsReducer = (
  state = initialState,
  action: IAppSettingsActions,
) => {
  switch (action.type) {
    case APP_SETTINGS_ACTIONS.SWITCH_THEME:
      return {theme: action.payload};
    default:
      return state;
  }
};

export default appSettingsReducer;
