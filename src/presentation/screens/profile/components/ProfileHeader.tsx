import { Text } from '@rneui/base';
import { View, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalBackgroundColor, primaryColor } from '../../../../config/theme/globalStyles';
import { Avatar, Divider, Icon } from '@rneui/themed';
import { ControlledTooltip } from '../../../components/ui/ControlledTooltip';


const ProfileHeader = () => {

    const { height: totalHeight } = useWindowDimensions();

    return (
        <View style={{ width: '100%', height: totalHeight * 0.36, backgroundColor: 'red' }}>
            <Avatar
                containerStyle={{ position: 'absolute', top: 60, left: 20, zIndex: 1, borderColor: 'white', borderWidth: 3 }}
                size={102}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <View style={{ width: '100%', height: '100%' }}>

                {/* Imagen */}

                <View style={{ flex: 1 }}>
                    <Image
                        resizeMode="cover"
                        style={{ flex: 1, width: '100%', opacity: 1 }}
                        source={require('../../../../assets/images/pt.png')}
                    />

                    <LinearGradient colors={['#5F5F5FD9', '#2F323FDB', globalBackgroundColor]} style={{ flexDirection: 'column', height: '40%', width: '100%', justifyContent: 'space-between', padding: 10, position: 'absolute', bottom: 0 }}>

                        {/* //TODO! Condicionar acorde al id del productor. Verificar */}
                                <TouchableOpacity style={{
                                    flexDirection: 'row', marginLeft: 10, position: 'absolute',
                                    top: 10,  
                                    right: 10,
                                    backgroundColor: primaryColor,
                                    opacity: 0.8,
                                    padding: 5,
                                    borderRadius: 20,
                                }}>
                                    <Text style={{fontWeight: 'bold',fontSize: 12, color: 'white', marginHorizontal: 5}}>Editar Perfil</Text>
                                </TouchableOpacity>
                        <View style={{ paddingHorizontal: 5, width: '74%' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text numberOfLines={2} h4 h4Style={{ color: 'white', fontWeight: 'bold' }}>Profile Name</Text>
                                {/* Editar Perfil */}

                                {/* Icono check + Tooltip */}
                                <ControlledTooltip
                                    popover={<Text style={{ color: 'white', fontWeight: '500' }}>El usuario ha sido verificado</Text>}
                                >
                                    <Icon name="checkmark-circle" type="ionicon" color={primaryColor} style={{ marginLeft: 10 }} />

                                </ControlledTooltip>
                            </View>
                            <Text numberOfLines={2} style={{ color: '#E2E2E2', fontWeight: '500', marginTop: 5, marginBottom: 10 }}>Eventos de Tecnologia, Todo lo referente a Programacion y mundo tech</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'flex-end', alignItems: 'flex-end' }}>

                            <View style={{ marginHorizontal: 15 }}>
                                <Text numberOfLines={2} style={{ color: 'white', fontWeight: '300', fontSize: 16 }}>Eventos:</Text>
                                <Text numberOfLines={1} style={{ textAlign: 'center', color: '#E2E2E2', fontWeight: 'bold', fontSize: 16 }}>05</Text>
                            </View>
                            <Divider orientation="vertical" width={2} />
                            <View style={{ marginHorizontal: 15 }}>
                                <Text numberOfLines={2} style={{ color: 'white', fontWeight: '300', fontSize: 16 }}>Seguidores:</Text>
                                <Text numberOfLines={1} style={{ textAlign: 'center', color: '#E2E2E2', fontWeight: 'bold', fontSize: 16 }}>1405</Text>
                            </View>
                        </View>

                    </LinearGradient>
                </View>


            </View>

        </View>
    );
};
export default ProfileHeader;
