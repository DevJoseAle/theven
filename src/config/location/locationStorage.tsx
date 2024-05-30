import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocationStorage{

    static async saveLocationToStorage(location: any) {
        const actualLocation = await AsyncStorage.getItem('location');
        try {
            if(actualLocation !== null) {
            await AsyncStorage.removeItem('location');
            await AsyncStorage.setItem('location', JSON.stringify(location));
        }else{
            await AsyncStorage.setItem('location', JSON.stringify(location));
        }
        } catch (error) {
            console.log('Error al guardar ubicación',error);
        }
        await AsyncStorage.setItem('location', JSON.stringify(location));
    }

    static async getLocationFromStorage() {
        try {
            const actualLocation = await AsyncStorage.getItem('location');
            if(actualLocation !== null) {
                return JSON.parse(actualLocation);
            }else{
                return null;
            }
        } catch (error) {
            console.log('No se pudo obtener la ubicación desde el GET',error);
        }

    }

    static async removeLocationFromStorage() {
        try {
            await AsyncStorage.removeItem('location');
        } catch (error) {
            console.log('Error al borrar ubicación',error);
        }
    }

}
