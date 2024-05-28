import {View, StyleSheet, KeyboardAvoidingView, Pressable, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyles} from '../../../config/theme/globalStyles';
import {CIcon} from '../../components/components';
import { useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../config/navigation/NavStack';
import {Input, Text} from '@rneui/themed';
import { supabase } from '../../../supabase-client';
import { RegisterSchema } from '../../utils/validationSchema';
import { useFormik } from 'formik';

const RegisterScreen = () => {

  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const { values, setFieldValue, handleSubmit, errors, touched }:any = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (value) => signUpWithEmail(value.email, values.password),
  });
  async function signUpWithEmail(inputEmail:string, inputPassword: string) {
    setIsLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: inputEmail.toString().toLowerCase(),
      password: inputPassword,
    });

    if (error) {Alert.alert(error.message);}
    if (!session) {Alert.alert('Please check your inbox for email verification!');}
    setIsLoading(false);

    if (session) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text
          h2
          h2Style={{textAlign: 'center', marginBottom: 20, fontWeight: '600'}}>
          Crea una cuenta
        </Text>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          inputContainerStyle={[styles.inputContainer]}
          rightIcon={<CIcon name="mail" size={30} />}
          value={values.email}
          onChangeText={(text) => setFieldValue('email', text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Contraseña"
          keyboardType="visible-password"
          autoCapitalize="none"
          secureTextEntry={isPassVisible}
          inputContainerStyle={[styles.inputContainer]}
          value={values.password}
          onChangeText={(text) => setFieldValue('password', text)}
          rightIcon={
            <Pressable onPress={() => setIsPassVisible(!isPassVisible)}>
              <CIcon name={isPassVisible ? 'eye-off' : 'eye'} size={30} />
            </Pressable>
          }
        />

        <TouchableOpacity disabled={isLoading}
          style={[
            globalStyles.btnPrimary,
            {width: '80%', alignSelf: 'center', marginTop: 10},
          ]}
          onPress={() => handleSubmit()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text style={[globalStyles.btnPrimaryText]}>Crear Cuenta </Text>
            <CIcon name="log-in-outline" color="white" size={25} />
          </View>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerText}>
            ¡Presiona Aquí si ya tienes cuenta!.
          </Text>
        </Pressable>
        {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      </KeyboardAvoidingView>
    </View>
  );
};
export default RegisterScreen;

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
  errorText: {
    marginTop: 15,
    fontSize:20,
    color: 'red',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  errorMsg:{
    marginTop:15,
    color: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
