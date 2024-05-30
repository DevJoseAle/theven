

import { PropsWithChildren, useEffect } from 'react';
import useLocationStore from '../store/location/useLocationStore';
import { LocationStorage } from '../../config/location/locationStorage';
const ActualLocationChecker = ({ children }: PropsWithChildren) => {
  const saveActualLocation = useLocationStore(state => state.saveActualLocation);
  const saveLocationFromLocalStorage = async () => {
    const storageActualLocation = await LocationStorage.getLocationFromStorage();

    if (!storageActualLocation) { return; }
    const { address } = storageActualLocation;

    saveActualLocation(address);


  };
  useEffect(() => {
    saveLocationFromLocalStorage();
  }, []);

  return (
    <>
      {children}
    </>
  );
};
export default ActualLocationChecker;
