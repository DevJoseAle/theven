
import { PropsWithChildren, useEffect } from 'react';
import { supabase } from '../../supabase-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
 import { AuthStorage } from '../../config/auth/authStorage';
import useAuthStore, { User } from '../store/auth/useAuthStore';

const SessionChecker = ({children}: PropsWithChildren) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  const readLocalStorage = async () => {
    //  await AuthStorage.clearToken();
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('id');
    // setUser()

    if (token && userId) {
      const { data: user} = await supabase.auth.getUser(token);
      const userData: User = {
        id: userId,
        email: user.user!.email || '',
      };
      console.log(1);
      setUser(userData, token);
      }else{
        clearUser();
      }
    };


  useEffect(() => {
    readLocalStorage();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        console.log(1);
        const user = session.user!;
        setUser({ id: user.id, email: user.email! }, session.access_token);
        console.log(2);
      } else if (event === 'SIGNED_OUT') {
        console.log(3);
        clearUser();
        console.log(4);
      }
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser, clearUser]);
  return <>
        {children}
    </>;
};
export default SessionChecker;
