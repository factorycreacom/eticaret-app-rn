import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomePage, HotDealsPage} from '../pages';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './customDrawerContent';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabStack = () => {
  const theme = useTheme();
  const defaultOptions: BottomTabNavigationOptions = {
    headerTitleAlign: 'left',
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.primary_light,
        tabBarLabelStyle: {color: theme.colors.gray, fontSize: 12},
        tabBarIconStyle: {fontSize: 22},
        tabBarStyle: {height: 90},
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-filled' : 'home';
          } else if (route.name === 'Deals') {
            iconName = focused ? 'loyalty' : 'local-offer';
          } else if (route.name === 'Basket') {
            iconName = focused ? 'shopping-basket' : 'shopping-basket';
          } else {
            return 'home';
          }
          return <MaterialIcons name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomePage} options={defaultOptions} />
      <Tab.Screen
        name="Deals"
        component={HotDealsPage}
        options={defaultOptions}
      />
      <Tab.Screen
        name="Basket"
        component={HotDealsPage}
        options={{...defaultOptions, tabBarBadge: 4}}
      />
    </Tab.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name="Main"
        component={TabStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

// İstenirse daha fazla stack bu alanda tanımlanabilir. Örn: Auth vb.

export {TabStack, DrawerStack};
