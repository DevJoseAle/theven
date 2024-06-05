import { Alert } from 'react-native';
import { supabase } from '../../supabase-client';
import useAuthStore, { User } from '../store/auth/useAuthStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../config/navigation/NavStack';
import { useState } from 'react';


export const  useHandleLogin = () => {
  const {setUser} = useAuthStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const handleLogin = async (email: string, password: string) => {

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email : email.toString().toLowerCase(),
        password : password,
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      if (data) {
        const userToSave: User = {
          id: data.user!.id,
          email: data.user?.email!,
        };
        setUser(userToSave, data.session!.access_token);
        navigation.reset({
          routes: [{ name: 'Main' }],
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
      if (error) {
        Alert.alert('Error', error.message);
        setHasError(true);
        setTimeout(() => {
        setHasError(false);
          setIsLoading(false);
        }, 3000);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);

    } catch (error) {
      console.log('desde el catch',error);
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    }

  };

  return {
    handleLogin,
    isLoading,
    hasError,

  };
};
