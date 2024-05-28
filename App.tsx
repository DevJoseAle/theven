import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavStack } from './src/config/navigation/NavStack';
import PermissionChecker from './src/presentation/providers/PermissionChecker';
import SessionChecker from './src/presentation/providers/SessionChecker';
import useAuthStore from './src/presentation/store/auth/useAuthStore';
import ActualLocationChecker from './src/presentation/providers/ActualLocationChecker';


const App = () => {

  const initializeAuthState = useAuthStore((state) => state.initializeAuthState);

  useEffect(() => {
    initializeAuthState();
  }, [initializeAuthState]);



  return (
    <SessionChecker>
      <NavigationContainer>
        <PermissionChecker>
          <ActualLocationChecker>
            <NavStack />
          </ActualLocationChecker>
        </PermissionChecker>
      </NavigationContainer>
    </SessionChecker>
  );
};
export default App;
