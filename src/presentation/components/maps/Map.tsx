import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {UserLocation} from '../../../infrastructure/interfaces/location';

interface Props {
  showUserLocation?: boolean;
  initialLocation: UserLocation;
}
export const MapSection = ({
  showUserLocation = true,
  initialLocation,
}: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showUserLocation}
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Marker"
          description="Description"
        />
      </MapView>
    </>
  );
};
