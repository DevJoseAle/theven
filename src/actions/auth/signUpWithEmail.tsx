import { supabase } from '../../supabase-client';

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


export const getUserByEmailAndUsername = async (email: string, username: string): Promise<boolean| null> => {
  const userEmail = email.toLowerCase().trim().toString();
  const userName = username.toLowerCase().trim().toString();

  try {
    let { data: producers, error } = await supabase
    .from('producers')
    .select('email')
    .eq('email', userEmail);
    if(error){ console.log('getUserByEmail', error, 'error'); return null;}

    let { data: usernameDB, error:error2 } = await supabase
    .from('producers')
    .select('username')
    .eq('username', userName);
    if(error2){ console.log('getUserByEmail', error, 'error'); return null;}

    if(producers!.length === 0 && usernameDB!.length === 0) { return false; }
  } catch (error) {
    console.log('getUserByEmail', error);
  }
  return true;
};
