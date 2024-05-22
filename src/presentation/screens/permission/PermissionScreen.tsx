import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {globalStyles} from '../../../config/theme/globalStyles';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';
const PermissionScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionStore();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Habilitar ubicacion:</Text>
      <Pressable
        onPress={requestLocationPermission}
        style={globalStyles.btnPrimary}>
        <Text style={{color: 'white'}}>PermissionScreen</Text>
      </Pressable>
      <Text>Permiso: {locationStatus}</Text>
    </View>
  );
};
export default PermissionScreen;
