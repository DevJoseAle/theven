import { create } from 'zustand';
import { AuthStorage } from '../../../config/auth/authStorage';
import { devtools } from 'zustand/middleware';

export interface User{
    id: string,
    email: string,
}
export type AuthType =  'NoAuthenticated' | 'Authenticated';

interface AuthState {
    user: User | null;
    token: string | null;
    setUser: (user: User, token: string) => void;
    clearUser: () => void;
    isAuthenticated: AuthType;

}
const useAuthStore = create<AuthState>()(devtools((set) => ({
  //Propiedades
    user: null,
    token: null,
    isAuthenticated: 'NoAuthenticated',

    //Metodos del store//

  setUser: async (user: User, token: string) =>{
    //Guardamos el token en el LS
    if(!user || !token){return;}
    try {
        await AuthStorage.saveToken({token: token, id: user.id, isAuthenticated: 'Authenticated'});
        set({ user, token, isAuthenticated: 'Authenticated'});

    } catch (error) {
        console.log('Error al guardar token',error);
    }
    console.log('');
    set({ user, token });},
  clearUser: () => {
    AuthStorage.clearToken();
    set({ user: null, token: null, isAuthenticated: 'NoAuthenticated' });},

}))
);

export default useAuthStore;
