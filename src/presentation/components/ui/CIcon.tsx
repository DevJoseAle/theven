import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}
export const CIcon = ({name, size = 20, color = 'black'}: Props) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};
