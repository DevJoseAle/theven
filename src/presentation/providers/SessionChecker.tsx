import { PropsWithChildren, useEffect } from 'react';
import { supabase } from '../../supabase-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuthStore, { User } from '../store/auth/useAuthStore';
import { AppState } from 'react-native';

const SessionChecker = ({children}: PropsWithChildren) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  const readLocalStorage = async () => {
    //  await AuthStorage.clearToken();
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('id');
    const email = await AsyncStorage.getItem('email');

    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    if (token && userId) {
      const { data: user} = await supabase.auth.getUser(token);
      if(!user || user.user === null || user.user.email === null) {return;}
      const userData: User = {
        id: userId,
        email: email!,
      };
      setUser(userData, token);
      }else{
        clearUser();
      }
    };


  useEffect(() => {
    readLocalStorage();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {

        const user = session.user!;
        setUser({ id: user.id, email: user.email! }, session.access_token);

      } else if (event === 'SIGNED_OUT') {

        clearUser();

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
