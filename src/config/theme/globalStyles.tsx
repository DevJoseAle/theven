import {StyleSheet} from 'react-native';

//Colores globales: 
export const globalWhite = '#EBEBEB';
export const ratingColor =  '#FFD558';
export const primaryColor  = '#fe4655';
export const globalBackgroundColor = '#2F323F';


export const globalStyles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: '#fe4655',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
  btnPrimaryText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  colorBtn:{
    backgroundColor: '#fe4655',
  },
});
