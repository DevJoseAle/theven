import { Text } from '@rneui/base';
import { View, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { CIcon } from '../../../components/ui/CIcon';
import { useNavigation } from '@react-navigation/native';
import { EventByIDEntity } from '../../../../domain/events/eventByIdEntity';

interface Props {
    event: EventByIDEntity
}
const DetailHeader = ({event}: Props) => {
    const navigation = useNavigation();
    const { height: totalHeight } = useWindowDimensions();
    return (
        <>
            <View style={{ width: '100%', height: totalHeight * 0.55 }}>
                {/* Imagen */}

                <View style={{ flex: 1 }}>
                    <Image
                        resizeMode="cover"
                        style={{ flex: 1, width: '100%' }}
                        source={require('../../../../assets/images/event.jpeg')}
                    />

                    <View style={{ flexDirection: 'row',height: '20%', width: '100%', justifyContent: 'space-between', padding: 10, backgroundColor: '#44444492', position: 'absolute', bottom: 0 }}>
                        <View style={{ paddingHorizontal: 5, width: '74%'}}>
                            <Text numberOfLines={2} h4 h4Style={{ color: 'white', fontWeight: 'bold' }}>{event.eventName}</Text>
                            <Text numberOfLines={1} style={{ color: '#E2E2E2', fontWeight: '500' }}>Andres Bello 123, providencia</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', width: '25%', height: 50, backgroundColor: 'white', borderRadius: 50, alignSelf: 'center' }} >
                            <Text numberOfLines={1} style={{ color: '#323232', textAlign: 'center', fontWeight: 'bold', alignSelf: 'center' }}>$: {event.price}</Text>
                        </View>
                    </View>

                </View>

                {/* Back button */}

                <View style={{ borderColor: '#CDCDCD',borderRadius: 30, borderWidth: 0.5, position: 'absolute', zIndex: 999, elevation: 9, top: 50, left: 10 }}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                        style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 30,
                            padding: 10,
                        }}
                    >
                        <CIcon name="chevron-back" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                {/* Favoritos y compartir */}
                <View style={{position: 'absolute', zIndex: 999, elevation: 9, top: 50, right: 10, flexDirection: 'row', justifyContent: 'space-between'}}>


                    <View >
                        <TouchableOpacity
                            style={{
                                borderColor: '#CDCDCD',borderRadius: 30, borderWidth: 0.5,
                                width: 60,
                                height: 50,
                                marginHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                padding: 10,
                            }}
                        >
                            <CIcon name="share-social-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={{
                                width: 60,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#FFFFFF',
                                borderColor: '#CDCDCD',borderRadius: 30, borderWidth: 0.5,
                                padding: 10,
                            }}
                        >
                            <CIcon name="heart-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </>
    );
};
export default DetailHeader;
