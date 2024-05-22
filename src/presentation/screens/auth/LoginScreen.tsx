import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import AuthGoogleBtn from './components/AuthGoogleBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../../../config/theme/globalStyles';
import { CIcon } from '../../components/components';
import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../config/navigation/NavStack';
import { Input } from '@rneui/themed';
import { supabase } from '../../../supabase-client';
import useAuthStore, { User } from '../../store/auth/useAuthStore';

const LoginScreen = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { setUser } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (data) {
        const userToSave: User = {
          id: data.user!.id,
          email: data.user?.email!,
        };
        setUser(userToSave, data.session!.access_token);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
      if (error) {
        Alert.alert('Error', error.message);
      }

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          inputContainerStyle={[styles.inputContainer]}
          rightIcon={<CIcon name="mail" size={30} />}
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <Input
          placeholder="Contraseña"
          keyboardType="visible-password"
          secureTextEntry={isPassVisible}
          inputContainerStyle={[styles.inputContainer]}
          value={userPassword}
          onChangeText={setUserPassword}
          rightIcon={
            <Pressable onPress={() => setIsPassVisible(!isPassVisible)}>
              <CIcon name={isPassVisible ? 'eye-off' : 'eye'} size={30} />
            </Pressable>
          }
        />
        <Pressable>
          <Text style={styles.forgotPass}>Olvidé mi Contraseña</Text>
        </Pressable>

        <TouchableOpacity
          style={[
            globalStyles.btnPrimary,
            { width: '80%', alignSelf: 'center', marginTop: 20 },
          ]}
          onPress={() => handleLogin(userEmail, userPassword)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text style={[globalStyles.btnPrimaryText]}>Iniciar Sesión </Text>
            <CIcon name="log-in-outline" color="white" size={25} />
          </View>
        </TouchableOpacity>
        <AuthGoogleBtn />
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>
            No tengo cuenta. Quiero Registrarme
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotPass: {
    color: '#404040',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  registerText: {
    color: '#00526D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  inputContainer: {
    marginVertical: -5,
    paddingHorizontal: 30,
    height: 50,
    width: '80%',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#727272B9',
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
  },
});
