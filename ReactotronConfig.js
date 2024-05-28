import Reactotron, { asyncStorage } from 'reactotron-react-native';
import reactotronZustand from 'reactotron-plugin-zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usePermissionStore  from './src/presentation/store/permissions/usePermissionStore';
import useLocationStore  from './src/presentation/store/location/useLocationStore';

import useAuthStore from './src/presentation/store/auth/useAuthStore';


Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .use(
    reactotronZustand({
    stores: [
      { name: 'auth', zustand: useAuthStore },
      { name: 'location', zustand: useLocationStore },
      { name: 'permissions', zustand: usePermissionStore },
    ],
  }),
  asyncStorage(),) // añade compatibilidad con Redux
  .connect(); // establece la conexión con Reactotron

// Para borrar la consola de Reactotron en cada inicio de la aplicación
if (__DEV__) {
  Reactotron.clear();
}

export default Reactotron;
