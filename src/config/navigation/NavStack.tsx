import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../presentation/screens/auth/LoginScreen';
import LoadingScreen from '../../presentation/screens/loading/LoadingScreen';
import MapsScreen from '../../presentation/screens/maps/MapScreen';
import PermissionScreen from '../../presentation/screens/permission/PermissionScreen';
import RegisterScreen from '../../presentation/screens/auth/RegisterScreen';
import HomeScreen from '../../presentation/screens/home/HomeScreen';
import useAuthStore from '../../presentation/store/auth/useAuthStore';

export type RootStackParams = {
  Loading: undefined;
  Register: undefined;
  Login: undefined;
  Maps: undefined;
  Home: undefined;
  Permission: undefined;

};

const Stack = createStackNavigator<RootStackParams>();



export const NavStack = () => {
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  
 useEffect(() => {
   
 }, [isAuth])
 

  return (
    <Stack.Navigator
      initialRouteName={isAuth === 'NoAuthenticated' ? 'Login' : 'Home'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Maps" component={MapsScreen} />
      <Stack.Screen name="Permission" component={PermissionScreen} />
    </Stack.Navigator>
  );
};
