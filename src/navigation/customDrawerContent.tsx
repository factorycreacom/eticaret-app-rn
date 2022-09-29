import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {APP_SETTINGS_ACTIONS} from '../models/actions.types';
import {APP_THEME, ICombineReducer} from '../models/generic.types';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const CustomDrawerContent = () => {
  const dispatch = useDispatch();
  const animationRef = useRef<Lottie>(null);

  const themeState = useSelector((state: ICombineReducer) => state.appsettings);

  const toggleSwitch = () => {
    if (themeState.theme === APP_THEME.LIGHT) {
      animationRef.current?.play(30, 280);
    } else {
      animationRef.current?.play(300, 481);
    }

    setTimeout(() => {
      dispatch({
        type: APP_SETTINGS_ACTIONS.SWITCH_THEME,
        payload:
          themeState.theme === APP_THEME.LIGHT
            ? APP_THEME.DARK
            : APP_THEME.LIGHT,
      });
    }, 600);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => toggleSwitch()}>
        <Lottie
          loop={false}
          ref={animationRef}
          style={{height: 60}}
          source={require('./../../assets/dark-mode.json')}
        />
      </TouchableOpacity>
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
