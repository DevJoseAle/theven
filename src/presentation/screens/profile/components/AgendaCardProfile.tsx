import { View, Text, TouchableOpacity, Image } from 'react-native';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';
import { BlurView } from '@react-native-community/blur';
import { globalBackgroundColor } from '../../../../config/theme/globalStyles';

interface Props {

    event: EventTimeLineEntity
}
const AgendaCardProfile = ({ event }: Props) => {
    return (
        <TouchableOpacity
        
            activeOpacity={0.7}
            style={{
                alignSelf: 'center',
                flex: 1,
                marginHorizontal: 15,
                backgroundColor: 'transparent',
                marginTop: 5,
                marginBottom:4,
                borderRadius: 10,
                width: '98%',
                height: 80,
                zIndex: 999,
                overflow: 'hidden',
            }}>


            <Image
                style={{ flex: 1, width: '100%', borderRadius: 10, height: '100%' }}
                resizeMode="cover"
                source={require('../../../../assets/images/evento2.jpg')} />

            <BlurView style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
                blurType="light"
                blurAmount={6}
            >
                <View style={{ paddingHorizontal: 25, flex: 1, width: '100%', justifyContent: 'center', flexDirection: 'column', alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start' }}>


                    <View >
                        <Text style={{ textAlign: 'center', color: globalBackgroundColor, fontWeight: 'bold' }}>{event.eventName}</Text>
                    </View>
                    <View>
                        <Text style={{ paddingTop: 5, textAlign: 'center', color: globalBackgroundColor, fontWeight: '500' }}>Fecha: {event.initDate}</Text>
                    </View>
                    <View>
                        <Text style={{ paddingTop: 5, textAlign: 'center', color: globalBackgroundColor, fontWeight: 'bold' }}>{event.addressSpace}</Text>
                    </View>
                </View>
            </BlurView>
        </TouchableOpacity>
    );
};
export default AgendaCardProfile;
