import { View, StyleSheet, KeyboardAvoidingView, Pressable, Alert, Platform, ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyles} from '../../../config/theme/globalStyles';
import {CIcon} from '../../components/components';
import { useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../config/navigation/NavStack';
import {Input, Text} from '@rneui/themed';
import { supabase } from '../../../supabase-client';
import { RegisterSchema } from '../../utils/validationSchema';
import { useFormik } from 'formik';
import { getUserByEmailAndUsername } from '../../../actions/auth/signUpWithEmail';

const RegisterScreen = () => {

  const [isPassVisible, setIsPassVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  const { values, setFieldValue, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (value) => signUpWithEmail(value.email, value.password, value.username, value.firstname, value.lastname),
  });

  const signUpWithEmail = async (inputEmail: string, inputPassword: string, inputUsername: string, inputFirstName: string, inputLastname: string) => {

   try {
     setIsLoading(true);
     const userExist = await getUserByEmailAndUsername(inputEmail, inputUsername);
     console.log(userExist);
     resetForm();
     if (userExist) {
       Alert.alert('Usuario ya Existe', 'Prueba iniciar sesión o recuperar contraseña');
       resetForm();
       setIsLoading(false);
       return;
     }
     const { data:userData ,error } = await supabase.auth.signUp({
       email: inputEmail.toString().toLowerCase(),
       password: inputPassword,

     });
     if (error) {
       Alert.alert('Error', error.message);
     }
     const user = userData.user;

     if (user) {
       const {error: insertError} = await supabase
         .from('producers')
         .insert([{email: user.email, first_name: inputFirstName, last_name: inputLastname, username: inputUsername}]);
         if (insertError) {
           Alert.alert('Error', insertError.message);
           resetForm();
           setIsLoading(false);
           console.log('Error en el insert', insertError);
           return;
         }
         Alert.alert('¡¡Genial!!', 'Se ha registrado con exito, ve a tu mail para verificar tu cuenta');
         resetForm();
     }
     setIsLoading(false);
     resetForm();
   } catch (error) {
     console.log('Catch Signup',error);
   }finally {
     setIsLoading(false);
     resetForm();
   }


  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      if (event === 'SIGNED_IN') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
        console.log(session);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };

  }, [navigation]);

  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, height: '100%' }}>
        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center'}}>
        <ScrollView contentContainerStyle={styles.container}>
        <View style={{ justifyContent: 'center', marginBottom: 30, alignItems: 'center', alignContent: 'center', alignSelf: 'center', height: 50, width: 200, borderRadius: 50, backgroundColor: '#fe4655' }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: 'white', fontStyle: 'italic', width: 200 }}>Theven</Text>
            </View>
        <Text
          h2
          h2Style={{textAlign: 'center', marginBottom: 20, fontWeight: '600'}}>
          Crea una cuenta
        </Text>
        <Input
          placeholder="Nombre de usuario"
          keyboardType="default"
          inputContainerStyle={[styles.inputContainer]}
          rightIcon={<CIcon name="person" size={30} />}
          value={values.username}
          onChangeText={(text) => setFieldValue('username', text)}
          autoCapitalize="none"
        />
          <Input
            placeholder="Nombre"
            keyboardType="default"
            inputContainerStyle={[styles.inputContainer]}
            rightIcon={<CIcon name="reader" size={30} />}
            value={values.firstname}
            onChangeText={(text) => setFieldValue('firstname', text)}
            autoCapitalize="none"
          />
        <Input
          placeholder="Apellido"
          keyboardType="default"
          inputContainerStyle={[styles.inputContainer]}
          rightIcon={<CIcon name="reader" size={30} />}
          value={values.lastname}
          onChangeText={(text) => setFieldValue('lastname', text)}
          autoCapitalize="none"
        />

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
        {errors.username && touched.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        {errors.firstname && touched.firstname ? <Text style={styles.errorText}>{errors.firstname}</Text> : null}
        {errors.lastname && touched.lastname ? <Text style={styles.errorText}>{errors.lastname}</Text> : null}
        {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        </ScrollView>
        </View>
      </KeyboardAvoidingView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
