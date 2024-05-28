import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuthStore from '../../store/auth/useAuthStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../config/navigation/NavStack';
import { globalStyles } from '../../../config/theme/globalStyles';
import  useLocationStore  from '../../store/location/useLocationStore';
const HomeScreen = () => {
  const {clearUser: logout} = useAuthStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const location = useLocationStore(state => state.lastKnownLocation);
  const getLocation = useLocationStore(state => state.getLocation);

  return (
    <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{location === null ? 'No Location' : JSON.stringify(location) }</Text>
      <TouchableOpacity
      style={globalStyles.btnPrimary}
       onPress={()=> {
        getLocation();
       }}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize:40}}>Obtener Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={globalStyles.btnPrimary}
       onPress={()=> {
        navigation.navigate('Maps');
       }}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize:40}}>ir a Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={()=> {
        logout();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }]});

        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
