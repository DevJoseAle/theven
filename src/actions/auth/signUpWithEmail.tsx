import {supabase} from '../../supabase-client';

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const data = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
