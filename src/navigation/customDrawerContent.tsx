import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {APP_SETTINGS_ACTIONS} from '../models/actions.types';
import {APP_THEME, ICombineReducer} from '../models/generic.types';
const CustomDrawerContent = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const themeState = useSelector((state: ICombineReducer) => state.appsettings);

  const toggleSwitch = () => {
    dispatch({
      type: APP_SETTINGS_ACTIONS.SWITCH_THEME,
      payload:
        themeState.theme === APP_THEME.LIGHT ? APP_THEME.DARK : APP_THEME.LIGHT,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Switch
        trackColor={{false: theme.colors.border, true: theme.colors.border}}
        thumbColor={
          themeState.theme === APP_THEME.LIGHT
            ? theme.colors.border
            : theme.colors.primary
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={themeState.theme === APP_THEME.DARK ? true : false}
      />
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
