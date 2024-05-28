import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(7, 'Usuario No Válido')
      .max(50, 'Too Long!')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Email Incorrecto')
      .required('Se requiere Email'),
    password: Yup.string()
      .min(6, 'Contraseña invalida')
      .max(50, 'Too Long!')
      .required('Se requiere Contraseña'),

});
export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .min(7, 'Email No Válido')
      .max(50, 'Too Long!')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Email Incorrecto')
      .required('Se requiere Email'),
    password: Yup.string()
      .min(6, 'Contraseña invalida, debe tener +6 letras o números')
      .max(50, 'Too Long!')
      .required('Se requiere Contraseña'),

});


