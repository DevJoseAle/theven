import {StyleSheet, View} from 'react-native';

import MapSection from '../../components/maps/Map';

import {useLocationStore} from '../../store/location/useLocationStore';
import {useEffect} from 'react';
import LoadingScreen from '../loading/LoadingScreen';

const MapsScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);
  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <MapSection initialLocation={lastKnownLocation} />
    </View>
  );
};
export default MapsScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
