import { create } from 'zustand';
import { AuthStorage } from '../../../config/auth/authStorage';
import { devtools } from 'zustand/middleware';
import { LocationStorage } from '../../../config/location/locationStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User{
    id: string,
    email: string,
}
export type AuthType =  'NoAuthenticated' | 'Authenticated';

interface AuthState {
    user: User | null;
    token: string | null;
    id: string | null;
    email: string | null;
    isAuthenticated: AuthType;
    setUser: (user: User, token: string) => void;
    clearUser: () => void;
    initializeAuthState: () => void;

}
const useAuthStore = create<AuthState>()(devtools((set) => ({
  //Propiedades
    user: null,
    token: null,
    id: null,
    email: null,
    isAuthenticated: 'NoAuthenticated',

    //Metodos del store//

    //Establecer State de auth
  setUser: async (user: User, token: string) =>{
    //Guardamos el token en el LS
    if(!user || !token){return;}
    try {
        await AuthStorage.saveToken({token: token, id: user.id, isAuthenticated: 'Authenticated', email: user.email});
        set({ user, token, isAuthenticated: 'Authenticated', id: user.id, email: user.email });

    } catch (error) {
        console.log('Error al guardar token',error);
    }

  
  },

    //Limpiar el state
  clearUser: () => {
    AuthStorage.clearToken();
    LocationStorage.removeLocationFromStorage();
    AsyncStorage.clear();
    set({ user: null, token: null, isAuthenticated: 'NoAuthenticated', id: null, email: null });},

    //Inicializar el state
    initializeAuthState : async() => {
      try {
        const storedData = await AuthStorage.getToken();
        if(!storedData) {return;}
        if(storedData && storedData.token){
          set({user: JSON.parse(storedData.user!), token: storedData.token, isAuthenticated: 'Authenticated', id: storedData.id, email: storedData.email});
        }else{
          set({ user: null, token: null, isAuthenticated: 'NoAuthenticated', id: null, email: null });
        }

      } catch (error) {
        console.log(error, 'Error al cargar Token');
      }
    },

}))
);

export default useAuthStore;
