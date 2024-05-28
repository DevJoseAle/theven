import Geolocation from '@react-native-community/geolocation';
import { UserLocation } from '../../infrastructure/interfaces/location';

export const getCurrentLocation = async (): Promise<UserLocation> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        console.log(info.coords);
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        console.log('Error al obtener location');
        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};
