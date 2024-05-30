import { Text } from '@rneui/base';
import { TouchableOpacity, View } from 'react-native';
import useLocationStore from '../../store/location/useLocationStore';
import { useEffect, useState } from 'react';
import { getAddressFromCoordinates } from '../../../actions/geocoding/geocoding';
import { GeocodingEntity } from '../../../domain/geocoding/geocodingEntity';
import { useNavigation } from '@react-navigation/native';

interface Props {
  lat: number,
  lng: number
}
const AddressGeoBtn = ({ lat, lng }: Props) => {

  const lastKnownLocation = useLocationStore(state => state.lastKnownLocation);
  const saveActualLocation = useLocationStore(state => state.saveActualLocation);
  const navigation = useNavigation();
  const [hasLocation, setHasLocation] = useState(false);
  const [actualLocation, setActualLocation] = useState<GeocodingEntity | undefined>();

  const getLocation = async () => {
    try {

      const data = await getAddressFromCoordinates(lat, lng);
      if (data === undefined) { return 'No se encontró dirección'; }

      setActualLocation(data);
    } catch (error) {
      console.log('error', error);
    }

  };
  useEffect(() => {
    if (lastKnownLocation === null) {
      setHasLocation(false);
    }
    if (lastKnownLocation !== null) {
      setHasLocation(true);
      getLocation();
    }
  }, [lastKnownLocation, lat, lng]);


  return (
    <View style={{ marginBottom: 40, position: 'absolute', bottom: 100, right: 20 }}>

      <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Confirma tu Ubicación:</Text>
      {
        !hasLocation
          ? <Text>No hay ubicación</Text>
          : <TouchableOpacity
            onPress={() => {
              saveActualLocation(actualLocation!);
              navigation.goBack();
            }}
            style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', padding: 10, borderRadius: 20, margin: 10 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>{actualLocation?.full_address}</Text>
          </TouchableOpacity>
      }
    </View>
  );
};
export default AddressGeoBtn;

