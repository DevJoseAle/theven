import {StyleSheet, View} from 'react-native';


import useLocationStore from '../../store/location/useLocationStore';
import {useEffect, useState} from 'react';
import LoadingScreen from '../loading/LoadingScreen';
import { MapSection } from '../../components/components';
import AddressGeoBtn from '../../components/ui/AddressGeoBtn';
import usePermissionStore from '../../store/permissions/usePermissionStore';
import { requestLocationPermission } from '../../../actions/permissions/location';

const MapsScreen = () => {
  const lastKnownLocation = useLocationStore( state => state.lastKnownLocation);
  const getLocation = useLocationStore( state => state.getLocation);
  const [isLoading, setIsLoading] = useState(true);
  const  locationStatus = usePermissionStore( state => state.locationStatus);
   const  checkLocationPermission = usePermissionStore(state => state.checkLocationPermission);

   useEffect(() => {
     if (locationStatus === 'granted') {
       console.log('DESDE  MAPS Permission granted');
     } else if (locationStatus !== 'undetermined') {
       console.log('DESDE MAPS Permission denied');
     }
   }, [locationStatus]);

   useEffect(() => {
     checkLocationPermission();
     if(locationStatus === 'blocked') {
      requestLocationPermission();
    }
   }, []);


  useEffect(() => {
    setIsLoading(true);
      try {
        getLocation();
        setIsLoading(false);
      } catch (error) {
        console.log('Error MapScreen location', error);
      }


  }, []);
  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <MapSection initialLocation={lastKnownLocation} />
      <AddressGeoBtn lat={lastKnownLocation.latitude} lng={lastKnownLocation.longitude}/>
    </View>
  );
};
export default MapsScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
