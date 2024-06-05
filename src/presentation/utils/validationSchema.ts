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
    username: Yup.string()
      .min(7, 'Username debe ser más largo')
      .max(15, 'Muy Largo el username')
      .required('Se requiere Username'),
    firstname: Yup.string()
      .min(3, 'nombre debe ser más largo')
      .max(15, 'Muy Largo el nombre')
      .required('Se requiere Nombre'),
    lastname: Yup.string()
      .min(4, 'Apellido debe ser más largo')
      .max(15, 'Muy Largo el Apellido')
      .required('Se requiere Apellido'),
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


