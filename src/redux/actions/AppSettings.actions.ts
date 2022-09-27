import {APP_SETTINGS_ACTIONS} from '../../models/actions.types';
import {APP_THEME} from '../../models/generic.types';

export const changeAppTheme = () => ({
  type: APP_SETTINGS_ACTIONS.SWITCH_THEME,
  payload: APP_THEME.LIGHT,
});
