
import { Card, Text } from '@rneui/base';
import { View, Pressable, StyleSheet } from 'react-native';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';
import { CIcon } from '../../../components/ui/CIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles, primaryColor } from '../../../../config/theme/globalStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../../../../config/navigation/NavStack';

interface Props {
    event: EventTimeLineEntity;
}
export const EventCard = ({ event }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={styles.shadowContainer}>
            <View style={styles.contentContainer}>


            <Pressable
                onPress={() => navigation.navigate('Event', { eventId: event.id! })}
                style={{ flex: 1, width: '100%' }}>
                <Card containerStyle={{ borderRadius: 10, borderColor: '#171717', width: '98%', alignSelf: 'center', height: 400, backgroundColor: '#171717', padding: 0 }}>
                    <Card.Image source={require('../../../../assets/images/event.jpeg')}
                        resizeMode="cover"
                        style={{ width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                    <Card.Title h4 h4Style={{ textAlign: 'left', fontSize: 20, fontWeight: '500', paddingTop: 10, color: 'white', marginLeft: 15, marginBottom: 10 }}>
                        {event.eventName}
                    </Card.Title>
                    <Card.Divider color={'#5E5E5E'} style={{width: '90%', alignItems: 'center', alignSelf: 'center'}} />
                    <View style={{ height: '35%', flexDirection: 'column', justifyContent: 'flex-start' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignContent: 'center' }}>
                            {/* Seccion Productor */}
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flex: 1 }}>

                                {/* Icono Perfil */}
                                <CIcon name={'person-circle-outline'} color={primaryColor} size={35} />

                                {/* Texto */}
                                <Text numberOfLines={1} style={[{ justifyContent: 'flex-start', alignSelf: 'center', fontWeight: 'bold', textDecorationLine: 'underline', color: 'white', fontSize: 18 }]}>  Eventos Theven SpA</Text>
                            </View>

                            {/* Boton Seguir */}
                            <TouchableOpacity style={[{ flexDirection: 'row', flex: 1, width: '60%', justifyContent: 'center', alignSelf: 'flex-end', alignItems: 'center', borderRadius: 30 }, globalStyles.colorBtn]}>
                                <Text style={{ fontWeight: 'bold', alignContent: 'center', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#FFFFFF' }}>Seguir</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Seccion Fecha y Ubicacion */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
                            {/* InitDate */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <CIcon name={'calendar-outline'} color={'white'} />
                                <Text style={{ color: 'white', fontWeight: 'bold' }}> {event.initDate}</Text>
                            </View>
                            {/* Ubicacion */}
                            <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'flex-end' }}>
                                <CIcon name={'location-outline'} color={'white'} />
                                <Text numberOfLines={1} style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }} > {event.addressSpace}</Text>
                            </View>
                        </View>

                        {/* Seccion Rating y Precio */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15, alignContent: 'center' }}>
                            {/* Rating */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <CIcon name={'star-half'} color="#F2E200" />
                                <Text style={{ textAlign: 'center', alignSelf: 'center', color: '#F2E200', fontWeight: 'bold', fontSize: 18 }}> {event.rating}</Text>
                            </View>
                            {/* Precio */}
                            <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'flex-end' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }} numberOfLines={1}>CLP:  {event.price}</Text>
                            </View>
                        </View>
                    </View>

                </Card>
            </Pressable>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    shadowContainer: {
        borderRadius: 10,
        height: 415,
        width: '100%',
        marginBottom: 7,
        shadowColor: '#6B6B6B',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 8,
        backgroundColor:'#2f323f', // Color de fondo semi-transparente
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'transparent', // Fondo transparente
    },
});
