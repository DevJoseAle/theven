import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../presentation/screens/auth/LoginScreen';
import LoadingScreen from '../../presentation/screens/loading/LoadingScreen';
import MapsScreen from '../../presentation/screens/maps/MapScreen';
import PermissionScreen from '../../presentation/screens/permission/PermissionScreen';
import RegisterScreen from '../../presentation/screens/auth/RegisterScreen';
import useAuthStore from '../../presentation/store/auth/useAuthStore';
import {EventScreen} from '../../presentation/screens/event/EventScreen';
import { BottomTabNav } from './BottomTabNav';

export type RootStackParams = {
  Loading: undefined;
  Register: undefined;
  Login: undefined;
  Maps: undefined;
  Main: undefined;
  Permission: undefined;
  Event: {eventId: string};

};

const Stack = createStackNavigator<RootStackParams>();



export const NavStack = () => {

  const initializeAuthState = useAuthStore((state) => state.initializeAuthState);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await initializeAuthState();
      setIsLoading(false);
    };
    init();
  }, [initializeAuthState]);

  if (isLoading) {
    return <LoadingScreen />;
  }



  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated === 'Authenticated' ? 'Main' : 'Login'}
      screenOptions={{
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{
        headerShown:false,

        }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{
        headerShown:false,

        }} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Main" component={BottomTabNav} options={{ headerShown: false }} />
      <Stack.Screen options={{
        headerShown: true,
        headerStyle: {backgroundColor: '#2f323f'},
        headerTitleStyle: {color: 'white'},
        title: 'Tu Ubicación',
        headerBackTitleStyle: {color: 'white'},
      }}
        name="Maps"
        component={MapsScreen} />
      <Stack.Screen name="Permission" component={PermissionScreen} />
      <Stack.Screen name="Event" component={EventScreen}  options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
};
