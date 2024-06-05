import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
import AuthGoogleBtn from './components/AuthGoogleBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../../../config/theme/globalStyles';
import { CIcon } from '../../components/components';
import { useState } from 'react';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../config/navigation/NavStack';
import { Input } from '@rneui/themed';
import { useFormik } from 'formik';
import { LoginSchema } from '../../utils/validationSchema';
import { useHandleLogin } from '../../utils/handleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const { handleLogin, isLoading, hasError } = useHandleLogin();


  const { values, setFieldValue, handleSubmit, errors, touched }: any = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (value) => handleLogin(value.email, values.password),
  });

  console.log('Login REndered');

  return (

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, height: '100%' }}>

      <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', backgroundColor: '#2f323f' }}>
        <ScrollView contentContainerStyle={styles.container}>
          <SafeAreaView>

            <View style={{ justifyContent: 'center', marginBottom: 30, alignItems: 'center', alignContent: 'center', alignSelf: 'center', height: 50, width: 200, borderRadius: 50, backgroundColor: '#fe4655' }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white', fontStyle: 'italic', width: 200 }}>Theven</Text>
            </View>

            <Input
              placeholder="Email"
              keyboardType="email-address"
              inputContainerStyle={[styles.inputContainer]}
              rightIcon={<CIcon name="mail" size={30} />}
              value={values.email}
              onChangeText={(value) => setFieldValue('email', value)}
            />

            <Input
              placeholder="Contraseña"
              keyboardType="visible-password"
              secureTextEntry={isPassVisible}
              inputContainerStyle={[styles.inputContainer]}
              value={values.password}
              onChangeText={(value) => setFieldValue('password', value)}
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
              onPress={() => handleSubmit()}
              disabled={isLoading}>
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
            <Pressable onPress={() => {
              navigation.dispatch(
                StackActions.replace('Register')
              );
            }}>
              <Text style={styles.registerText}>
                No tengo cuenta. Quiero Registrarme
              </Text>
            </Pressable>
            {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            {
              hasError ? <Text style={styles.errorMsg}>Usuario o contraseña incorrectos</Text> : null
            }
          </SafeAreaView>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#2f323f',
  },
  forgotPass: {
    color: '#C0C0C0',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  registerText: {
    color: '#0095C7',
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
  errorText: {
    marginTop: 15,
    fontSize: 20,
    color: 'red',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  errorMsg: {
    marginTop: 15,
    color: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
