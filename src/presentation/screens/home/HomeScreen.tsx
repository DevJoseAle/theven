import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuthStore from '../../store/auth/useAuthStore';
const HomeScreen = () => {
  const {clearUser: logout} = useAuthStore();
  return (
    <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
       onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
