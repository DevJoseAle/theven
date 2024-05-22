import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthType } from '../../presentation/store/auth/useAuthStore';


export class AuthStorage {

    static async saveToken({token, id, isAuthenticated}: {token: string, id: string, isAuthenticated: AuthType}) {
        //Guardamos el token en el LS
        if(token && id && isAuthenticated){
        try {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('id', id);
            await AsyncStorage.setItem('isAuthenticated', isAuthenticated);
        } catch (error) {
            console.log('Error al guardar token',error);
        }
    }
    }

    static async getToken(){
        try {
            const token = await AsyncStorage.getItem('token');
            const id = await AsyncStorage.getItem('id');
            const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
            if(!token || !id || !isAuthenticated){
                return null;
            }
            return {
                token,
                id,
                isAuthenticated,
            };
        } catch (error) {
            console.log('Error al obtener token',error);
        }
    }

    static async clearToken (){
        try{
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('id');
            await AsyncStorage.removeItem('isAuthenticated');
        }catch(error){
            console.log('Error al borrar token',error);
        }
    }
}
