import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavStack } from './src/config/navigation/NavStack';
import PermissionChecker from './src/presentation/providers/PermissionChecker';
import SessionChecker from './src/presentation/providers/SessionChecker';


const App = () => {
  return (
      <SessionChecker>
        <NavigationContainer>
            <PermissionChecker>
              <NavStack />
            </PermissionChecker>
        </NavigationContainer>
      </SessionChecker>
  );
};
export default App;
