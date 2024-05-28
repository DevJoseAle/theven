import {create} from 'zustand';
import {PermissionStatus} from '../../../infrastructure/interfaces/permissions';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permissions/location';
import { devtools } from 'zustand/middleware';

interface PermissionState {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;

  checkLocationPermission: () => Promise<PermissionStatus>;
}

 const usePermissionStore = create<PermissionState>()(devtools(set => ({
  locationStatus: 'undetermined',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();

    set({locationStatus: status});
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({locationStatus: status});
    return status;
  },
})));

export default usePermissionStore;