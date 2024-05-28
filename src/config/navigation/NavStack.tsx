import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../presentation/screens/auth/LoginScreen';
import LoadingScreen from '../../presentation/screens/loading/LoadingScreen';
import MapsScreen from '../../presentation/screens/maps/MapScreen';
import PermissionScreen from '../../presentation/screens/permission/PermissionScreen';
import RegisterScreen from '../../presentation/screens/auth/RegisterScreen';
import HomeScreen from '../../presentation/screens/home/HomeScreen';
import useAuthStore from '../../presentation/store/auth/useAuthStore';
import CustomAppBar from '../../presentation/components/ui/CustomAppBar';

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
      initialRouteName={isAuthenticated === 'Authenticated' ? 'Home' : 'Login'}
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
      <Stack.Screen name="Home" component={HomeScreen} options={{header: () => <CustomAppBar />}} />
      <Stack.Screen options={{headerShown: true, title: 'Tu Ubicación'}} name="Maps" component={MapsScreen} />
      <Stack.Screen name="Permission" component={PermissionScreen} />
    </Stack.Navigator>
  );
};
