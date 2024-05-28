import {PropsWithChildren, useEffect} from 'react';

 import {AppState} from 'react-native';
 import usePermissionStore from '../store/permissions/usePermissionStore';

const PermissionChecker = ({children}: PropsWithChildren) => {
   const  locationStatus = usePermissionStore( state => state.locationStatus);
   const  checkLocationPermission = usePermissionStore(state => state.checkLocationPermission);

   useEffect(() => {
     if (locationStatus === 'granted') {
       console.log('Permission granted');
     } else if (locationStatus !== 'undetermined') {
       console.log('Permission denied');
     }

     console.log(locationStatus)
   }, [locationStatus]);

   useEffect(() => {
     checkLocationPermission();
     
   }, []);

   useEffect(() => {

     const subscription = AppState.addEventListener('change', nextAppState => {
       if (nextAppState === 'active') {
         checkLocationPermission();
       }
     });

     return () => {
       subscription.remove();
     };
   }, []);

  return <>{children}</>;
};
export default PermissionChecker;
