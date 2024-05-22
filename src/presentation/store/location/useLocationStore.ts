import {create} from 'zustand';
import {UserLocation} from '../../../infrastructure/interfaces/location';
import {getCurrentLocation} from '../../../actions/locations/locations';

interface UserLocationState {
  lastKnownLocation: UserLocation | null;
  getLocation: () => Promise<UserLocation | null>;
}

export const useLocationStore = create<UserLocationState>()(set => ({
  lastKnownLocation: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({lastKnownLocation: location});
    return location;
  },
}));
