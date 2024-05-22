import {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {supabase} from '../../supabase-client';
// import {AppState} from 'react-native';
// import {usePermissionStore} from '../store/permissions/usePermissionStore';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {RootStackParams} from '../../config/navigation/NavStack';

const PermissionChecker = ({children}: PropsWithChildren) => {
  // AppState.addEventListener('change', state => {
  //   if (state === 'active') {
  //     supabase.auth.startAutoRefresh();
  //   } else {
  //     supabase.auth.stopAutoRefresh();
  //   }
  // });
  // const {locationStatus, checkLocationPermission} = usePermissionStore();
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   if (locationStatus === 'granted') {
  //     navigation.reset({
  //       routes: [{name: 'Maps'}],
  //     });
  //   } else if (locationStatus !== 'undetermined') {
  //     navigation.reset({
  //       routes: [{name: 'Permission'}],
  //     });
  //   }
  // }, [locationStatus]);

  // useEffect(() => {
  //   checkLocationPermission();
  // }, []);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     if (nextAppState === 'active') {
  //       checkLocationPermission();
  //     }
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return <>{children}</>;
};
export default PermissionChecker;
