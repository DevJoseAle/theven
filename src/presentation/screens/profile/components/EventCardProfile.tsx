import { View, Text, TouchableOpacity, Image } from 'react-native';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';
import { BlurView } from '@react-native-community/blur';

interface Props {

    event: EventTimeLineEntity
}
const EventCardProfile = ({ event }: Props) => {
    return (
        <TouchableOpacity
        
            activeOpacity={0.7}
            style={{
                flex: 1,
                marginHorizontal: 10,
                backgroundColor: 'transparent',
                marginVertical: 10,
                borderRadius: 10,
                width: '100%',
                height: 150,
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
                blurType="dark"
                blurAmount={1}
            >
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>


                    <View >
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{event.eventName}</Text>
                    </View>
                    <View>
                        <Text style={{ paddingTop: 15, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{event.initDate}</Text>
                    </View>
                    <View>
                        <Text style={{ paddingTop: 15, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{event.eventName}</Text>
                    </View>
                </View>
            </BlurView>
        </TouchableOpacity>
    );
};
export default EventCardProfile;
