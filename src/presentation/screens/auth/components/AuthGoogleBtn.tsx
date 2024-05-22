import {View, Text, Pressable, StyleSheet} from 'react-native';
import {CIcon} from '../../../components/components';
const AuthGoogleBtn = () => {
  return (
    <Pressable style={styles.Container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.btnTitle}>Iniciar Con Google</Text>
        <CIcon name="logo-google" size={25} />
      </View>
    </Pressable>
  );
};
export default AuthGoogleBtn;
const styles = StyleSheet.create({
  Container: {
    marginVertical: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    height: 50,
    width: '80%',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#727272B9',
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: '#404040',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
});
