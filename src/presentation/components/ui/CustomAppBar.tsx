import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CIcon } from './CIcon';
import { Text } from '@rneui/base';
import { useEffect } from 'react';
import useLocationStore from '../../store/location/useLocationStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../config/navigation/NavStack';
const CustomAppBar = () => {
    return (
        <SafeAreaView edges={['top']} style={{backgroundColor:'#2f323f'}} >
            <View style={styles.headerContainer}>
                <LocationBtn
                 />

                <ThevenTitle />
                <NotificationsBtn />
            </View>
        </SafeAreaView>
    );
};
export default CustomAppBar;

const LocationBtn = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const lastKnownLocation  = useLocationStore(state => state.address?.full_address);

    useEffect(() => {

     }, [lastKnownLocation]);
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('Maps');}}
            style={styles.locationbtn}>
            <View>

                <Text style={{ color: 'white', fontSize: 14 }}>Mi Ubicacion: </Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }} numberOfLines={1}>{lastKnownLocation === undefined ? 'No hay ubicación' : lastKnownLocation}</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                <CIcon name={'chevron-down-outline'} size={20} color={'#FE4655A1'}/>
            </View>
        </TouchableOpacity>
    );
};


const ThevenTitle = () => {
    return (
        <View style={styles.thevenTitleContainer}>
            <Text style={styles.thevenTitle} h4 >Theven</Text>
        </View>
    );
};
const NotificationsBtn = () => {
    return (
        <View style={styles.notificationsBtn}>
            <CIcon name={'notifications'} size={30} color={'#CACACA'} />
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationbtn: {
        marginLeft: 8,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    thevenTitleContainer: {
        marginLeft: 30,
        borderRadius: 50,
        flex: 1,
        backgroundColor:'#fe4655',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thevenTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    notificationsBtn: {
        flex: 1,
        marginRight: 8,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',

    },

});
