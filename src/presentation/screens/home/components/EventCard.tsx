
import { Text } from '@rneui/base';
import { View, Pressable, StyleSheet, Image } from 'react-native';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../../../../config/theme/globalStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParams } from '../../../../config/navigation/NavStack';
import { BlurView } from '@react-native-community/blur';
import { Divider, Avatar, Icon } from '@rneui/themed';

interface Props {
    event: EventTimeLineEntity;
}
export const EventCard = ({ event }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={() => navigation.navigate('Event', { eventId: event.id! })}
            style={styles.contentContainer}>
            <Image
                style={{
                    flex: 1,
                    width: '100%',
                    borderRadius: 10,
                }}
                source={require('../../../../assets/images/evento2.jpg')}
                resizeMode="cover"
            />
            <View style={{ width: '100%', height: 180, position: 'absolute', bottom: 0, overflow: 'hidden', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

                <BlurView
                    blurType="dark"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                    style={{ width: '100%', height: 200, position: 'absolute', paddingHorizontal: 10 }}
                >
                    {/* titulo */}
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ color: '#EBEBEB', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{event.eventName}</Text>
                        <Divider style={{ width: '100%', backgroundColor: '#EBEBEB', marginTop: 10 }} />
                    </View>

                    {/* Productor */}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignContent: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            <Avatar
                                size={40}
                                rounded
                                title="Fc"
                                containerStyle={{ backgroundColor: '#3d4db7' }}
                            />

                            <Text style={{ color: '#EBEBEB', fontSize: 18, fontWeight: 'bold', marginLeft: 10, alignSelf: 'center' }}>Eventos SPA</Text>

                        </View>
                        <View>
                            {/* Boton Seguir */}
                            <TouchableOpacity
                                style={[{ flexDirection: 'row', height: 30, width: 90, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }, globalStyles.colorBtn]}>
                                <Text style={{ fontWeight: 'bold', alignContent: 'center', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#FFFFFF' }}>Seguir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Info del evento */}
                    <View style={{ flexDirection: 'row', marginTop: 12, paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Icon name="calendar" type="ionicon" color="#EBEBEB" size={18} />
                            <Text numberOfLines={1} style={{ color: '#EBEBEB', fontSize: 15, fontWeight: 'bold', marginLeft: 5, alignSelf: 'center' }}>{event.initDate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1.4, justifyContent: 'flex-end' }}>
                            <Icon name="location" type="ionicon" color="#EBEBEB" size={18} />
                            <Text numberOfLines={1} style={{ color: '#EBEBEB', fontSize: 15, fontWeight: 'bold', marginLeft: 5, alignSelf: 'center' }}>{event.addressSpace}</Text>
                        </View>
                    </View>
                    {/* Rating y Precio*/}
                    <View style={{ flexDirection: 'row', marginTop: 12, paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Icon name="star-half" type="ionicon" color="#FFD558" size={20} />
                            <Text numberOfLines={1} style={{ color: '#FFD558', fontSize: 20, fontWeight: 'bold', marginLeft: 5, alignSelf: 'center' }}>{event.rating}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1.4, justifyContent: 'center' }}>
                            <Icon name="cash" type="ionicon" color="#EBEBEB" size={20} />
                            <Text numberOfLines={1} style={{ color: '#EBEBEB', fontSize: 20, fontWeight: 'bold', marginLeft: 5, alignSelf: 'center' }}>CLP: {event.price}</Text>
                        </View>
                    </View>
                </BlurView>
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '98%',
        height: 400,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
