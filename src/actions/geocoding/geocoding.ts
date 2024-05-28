import { GeocodingEntity } from '../../domain/geocoding/geocodingEntity';
import { ActualGeocoding, ActualGeoCodingResponse } from '../../infrastructure/interfaces/geocoding';
import { GeocodingAddress } from '../../infrastructure/mappers/geocodingAddress';
import { geocodingAPIAdress } from '../api/geocodingApi';


export const getAddressFromCoordinates = async (latitude: number, longitude: number): Promise<GeocodingEntity | undefined> => {
    try {
        const response = await geocodingAPIAdress.get<ActualGeoCodingResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBZwUiROP1F819URF-zKfLjkJZSsF9WC6o`,);

        const data: ActualGeocoding[] = response.data.results;
        const geoCoding = GeocodingAddress.geocodingMapper(data[0]);

        console.log('Llegué Aqui', geoCoding);
        return geoCoding;


    } catch (error) {
        console.log('Catch Geocoding', error);
    }

};
//: Promise<ActualGeoCodingResponse[]>
