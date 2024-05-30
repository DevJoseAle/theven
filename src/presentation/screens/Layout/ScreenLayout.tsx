import { PropsWithChildren } from 'react';
import { View} from 'react-native';
const ScreenLayout = ({children}: PropsWithChildren) => {
  return (
    <View style={{backgroundColor:'#44444492'}}>
      {children}
    </View>
  );
};
export default ScreenLayout;
