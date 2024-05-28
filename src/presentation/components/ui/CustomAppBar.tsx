import { View,  StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CIcon } from './CIcon';
import { Text } from '@rneui/base';
const CustomAppBar = () => {
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <LocationBtn />
            
                <ThevenTitle />
                <NotificationsBtn />
            </View>
        </SafeAreaView>
    );
};
export default CustomAppBar;

const LocationBtn = () => {
    return (
        <TouchableOpacity 
        onPress={() => {}}
        style={styles.locationbtn}>
            <View>

            <Text style={{color: 'black', fontSize: 14}}>Mi Ubicacion: </Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>Theven</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>

            <CIcon name={'chevron-down-outline'} size={20} />
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
            <CIcon name={'notifications'} size={30} />
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thevenTitle:{
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
