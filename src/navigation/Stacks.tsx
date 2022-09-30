import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BasketPage, HomePage, HotDealsPage, ProfilePage} from '../pages';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './customDrawerContent';
import {useTheme} from '@react-navigation/native';
import {HeaderRightIcon, HeaderTitle} from '../components/Header';
import {useSelector} from 'react-redux';
import {ICombineReducer} from '../models/generic.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabStack = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const defaultOptions: BottomTabNavigationOptions = {
    headerTitleAlign: 'left',
  };
  const basketState = useSelector((state: ICombineReducer) => state.basket);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarLabelStyle: {color: theme.colors.gray, fontSize: 12},
        tabBarIconStyle: {fontSize: 22},
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: 5 + insets.bottom,
        },
        headerShadowVisible: false,
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-filled' : 'home';
          } else if (route.name === 'Deals') {
            iconName = focused ? 'loyalty' : 'local-offer';
          } else if (route.name === 'Basket') {
            iconName = focused ? 'shopping-basket' : 'shopping-basket';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            return 'home';
          }
          return <MaterialIcons name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          ...defaultOptions,
          headerTitle: () => <HeaderTitle title="Deals" />,
          headerRight: () => <HeaderRightIcon />,
        }}
      />
      <Tab.Screen
        name="Deals"
        component={HotDealsPage}
        options={{
          ...defaultOptions,
          headerTitle: () => <HeaderTitle title="Hottest Deals" />,
          headerRight: () => <HeaderRightIcon />,
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketPage}
        options={{
          ...defaultOptions,
          headerTitle: () => <HeaderTitle title="Basket" />,
          headerRight: () => <HeaderRightIcon />,
          tabBarBadge: basketState.products?.length
            ? basketState.products.length
            : undefined,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          ...defaultOptions,
          headerTitle: () => <HeaderTitle title="Profile" />,
          headerRight: () => <HeaderRightIcon />,
        }}
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
