import { View, TouchableOpacity, Pressable } from 'react-native';
import { globalStyles } from '../../../../config/theme/globalStyles';
import { CIcon } from '../../../components/ui/CIcon';
import {  Divider, Text } from '@rneui/base';
import { useEffect, useState } from 'react';
import { EventByIDEntity } from '../../../../domain/events/eventByIdEntity';
import { getCreatorById } from '../../../utils/getCreatorById';
import LoadingScreen from '../../loading/LoadingScreen';

interface Props {
    event: EventByIDEntity
}
const DetailBody = ({ event }: Props) => {
    const [openSection, setOpenSection] = useState(false);
    const [userInfo, setUserInfo] = useState<string>();
    const [loading, setLoading] = useState(true);

    const getuser = async (id: string) => {
        const user = await getCreatorById(id);
        setUserInfo(user);
    };
    useEffect(() => {
        setLoading(true);
        getuser(event.creatorId);
        setLoading(false);
    }, [event]);
    if (loading) { return <LoadingScreen />; }
    return (
        <View
            style={{ flex: 1, marginHorizontal: 18, marginVertical: 10, backgroundColor: '#2f323f' }}
        >
            {/* Producer Section */}
            <View style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#fffbd9',
                borderRadius: 20,

            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    alignSelf: 'center',
                }}>{userInfo?.toLocaleUpperCase()} </Text>
                {/* Boton Seguir */}
                <TouchableOpacity style={[{ marginRight: 15, flexDirection: 'row', width: '30%', height: 35, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', borderRadius: 30 }, globalStyles.colorBtn]}>
                    <Text style={{ fontWeight: 'bold', alignContent: 'center', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#FFFFFF' }}>Seguir</Text>
                </TouchableOpacity>
            </View>

            {/* Description Section pt1*/}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>

                    <CIcon name={'calendar-outline'} color={'white'} size={20} />
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        marginTop: 3,
                        marginLeft: 5,
                        color: 'white',
                    }}>
                        Fecha: {event.initDate}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <CIcon name={'time-outline'} color={'white'} size={20} />
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        marginTop: 3,
                        marginLeft: 5,
                        color: 'white',
                    }}>
                        Hora: {event.initHour}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 3,
                        marginLeft: 5,
                        color: 'white',
                    }}>
                        Capacidad:
                    </Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 3,
                        marginLeft: 5,
                        color: 'white',
                    }}>
                        {event.capacity}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 3,
                        marginLeft: 5,
                        color: 'white',
                    }}>
                        Disponible:
                    </Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 3,
                        marginLeft: 5,
                        color: 'white',
                    }}>
                        {event.attendance}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, alignItems: 'center', width: '100%' }}>
                <View style={{ width: '10%' }}>
                    <CIcon name={'alert-circle-outline'} color={'white'} size={35} />

                </View>
                <View style={{ width: '80%', marginLeft: 10 }}>

                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Politica de Devolucion: </Text>
                    <Text style={{ fontWeight: '500', color: '#AEAEAE', fontSize: 14, marginTop: 5 }}>El Productor revisará los reembolsos Caso a Caso</Text>
                </View>
            </View>

            {/* Asistence Btn Section */}
            <TouchableOpacity style={{ justifyContent: 'center', marginTop: 15, backgroundColor: '#ff4f5b', borderRadius: 50, width: '70%', height: 40, alignContent: 'center', alignSelf: 'center', alignItems: 'center' }}>

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignContent: 'center', alignSelf: 'center', alignItems: 'center', textAlign: 'center' }}>Comprar Entrada</Text>
            </TouchableOpacity>
            <Divider style={{ width: '99%', marginTop: 20, justifyContent: 'center', alignSelf: 'center' }} />
            {/* Description Section pt2 */}
            <View>
                {/* Description title */}

                <View style={{ flexDirection: 'column' }}>

                    <View style={{flexDirection:'row', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 10}}>

                        <Text style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: 20,

                            textAlign: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>

                        {`Rating: ${event.rating}`}


                        </Text>
                        <View  style={{width: 5}}/>
                        <CIcon name={'star-half'} color={'#ff4f5b'} size={25} />
                    </View>
                    <Text h4 style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 18,
                        marginTop: 20,
                    }}>
                        Acerca de este Evento:
                    </Text>
                    <Text style={{
                        fontWeight: '500',
                        color: 'white',
                        fontSize: 15,
                        marginTop: 20,
                        height: openSection ? 'auto' : 20,
                    }}>
                    Fugiat et labore dolore ut excepteur minim. Ea ut ex mollit enim occaecat esse dolor dolore ipsum occaecat consectetur. Excepteur nostrud irure veniam qui id officia sint incididunt est irure. Ullamco pariatur officia quis pariatur ea excepteur cillum in ad do consequat.
                    Fugiat et labore dolore ut excepteur minim. Ea ut ex mollit enim occaecat esse dolor dolore ipsum occaecat consectetur. Excepteur nostrud irure veniam qui id officia sint incididunt est irure. Ullamco pariatur officia quis pariatur ea excepteur cillum in ad do consequat.
                    Fugiat et labore dolore ut excepteur minim. Ea ut ex mollit enim occaecat esse dolor dolore ipsum occaecat consectetur. Excepteur nostrud irure veniam qui id officia sint incididunt est irure. Ullamco pariatur officia quis pariatur ea excepteur cillum in ad do consequat.
                    Fugiat et labore dolore ut excepteur minim. Ea ut ex mollit enim occaecat esse dolor dolore ipsum occaecat consectetur. Excepteur nostrud irure veniam qui id officia sint incididunt est irure. Ullamco pariatur officia quis pariatur ea excepteur cillum in ad do consequat.

                    </Text>
                    <Pressable onPress={() => {
                        setOpenSection(!openSection);
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginTop: 20, textDecorationLine: 'underline', textDecorationColor: '#ff4f5b' }}>{openSection ? 'Ver Menos' : 'Ver Mas'}</Text>
                    </Pressable>
                    <Divider style={{ width: '99%', marginTop: 10, justifyContent: 'center', alignSelf: 'center' }} />
                </View>
            </View>
        </View>
    );
};
export default DetailBody;
