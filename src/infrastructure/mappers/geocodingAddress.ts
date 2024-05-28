import type { GeocodingEntity } from '../../domain/geocoding/geocodingEntity';
import type { ActualGeocoding } from '../interfaces/geocoding';

export class GeocodingAddress {
    static geocodingMapper = (location: ActualGeocoding): GeocodingEntity => {
        return {
            full_address: location.formatted_address,
            address: location.address_components[0].long_name,
            number: location.address_components[0].long_name,
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng,

        };
    };

}
