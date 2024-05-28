import {create} from 'zustand';
import {UserLocation} from '../../../infrastructure/interfaces/location';
import {getCurrentLocation} from '../../../actions/locations/locations';
import { devtools } from 'zustand/middleware';
import { LocationStorage } from '../../../config/location/locationStorage';
import { GeocodingEntity } from '../../../domain/geocoding/geocodingEntity';
import { getAddressFromCoordinates } from '../../../actions/geocoding/geocoding';

interface UserLocationState {
  lastKnownLocation: UserLocation | null;
  address?: GeocodingEntity | null;
  getLocation: () => Promise<UserLocation | undefined>;
  clearState: () => void;
  saveActualLocation: (actualLocation: GeocodingEntity) => Promise<void>;
}

 const useLocationStore = create<UserLocationState>()(devtools(set => ({
  lastKnownLocation: null,
  getLocation: async (address? : GeocodingEntity) => {

    if(!address){
      const location = await getCurrentLocation();
      let newAddress = await getAddressFromCoordinates(location.latitude, location.longitude);
      if(!newAddress){return;}
      set({lastKnownLocation: location, address: newAddress});
      return location;
    }
    const location = await getCurrentLocation();
    set({lastKnownLocation: location, address});
    return location;
  },
  saveActualLocation: async (actualLocation: GeocodingEntity) => {
    const location = await getCurrentLocation();
    set({lastKnownLocation: location, address: actualLocation});
    await LocationStorage.saveLocationToStorage({location: location, address: actualLocation});

  },
  clearState : () => {
    set({lastKnownLocation: null, address: null});

  },
})));

export default useLocationStore;
