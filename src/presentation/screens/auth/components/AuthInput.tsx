import {View, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';
import {CIcon} from '../../../components/components';

interface Props {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  type?: 'password' | 'email';
  value?: string;
}
const AuthInput = ({
  placeholder,
  keyboardType = 'default',
  type = 'email',
  value,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#727272B9'}
        style={styles.input}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
      />
      {type === 'password' ? (
        <CIcon name="eye-sharp" size={29} />
      ) : (
        <CIcon name="mail" size={29} />
      )}
    </View>
  );
};
export default AuthInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
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
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 20,
    height: 50,
    width: '80%',
  },
});
