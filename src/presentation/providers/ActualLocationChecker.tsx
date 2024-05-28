

import { PropsWithChildren, useEffect } from 'react';
import useLocationStore from '../store/location/useLocationStore';
import { LocationStorage } from '../../config/location/locationStorage';
const ActualLocationChecker = ({children}: PropsWithChildren) => {

    // const saveActualLocation = useLocationStore(state => state.saveActualLocation);
    const lastKnownLocation = useLocationStore(state => state.lastKnownLocation);
    // const saveActualLocation = useLocationStore(state => state.saveActualLocation);
    const readLocalStorage = async () =>{
        const storageActualLocation = await LocationStorage.getLocationFromStorage();

        if (!storageActualLocation) {return;}
        const {location, address} = storageActualLocation;
        console.log('STORAGE',storageActualLocation);
        console.log('location',location);
        console.log('address',address);

    };
    useEffect(() => {
        readLocalStorage();
       console.log('Desde Checker -------: ',lastKnownLocation);


    }, []);

  return (
    <>
      {children}
    </>
  );
};
export default ActualLocationChecker;
