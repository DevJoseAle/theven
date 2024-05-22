import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotronZustand from 'reactotron-plugin-zustand';
import { usePermissionStore } from './src/presentation/store/permissions/usePermissionStore';
import { useLocationStore } from './src/presentation/store/location/useLocationStore';
import useAuthStore from './src/presentation/store/auth/useAuthStore';


Reactotron
  .setAsyncStorageHandler(AsyncStorage) // conecta Reactotron con AsyncStorage
  .configure() // configuración de Reactotron
  .useReactNative() // añade todas las funciones predeterminadas de React Native
  .use(reactotronZustand({
    stores: [
      { name: 'auth', zustand: useAuthStore },
      { name: 'location', zustand: useLocationStore },
      { name: 'permissions', zustand: usePermissionStore },
    ],
  })) // añade compatibilidad con Redux
  .connect(); // establece la conexión con Reactotron

// Para borrar la consola de Reactotron en cada inicio de la aplicación
if (__DEV__) {
  Reactotron.clear();
}

export default Reactotron;
