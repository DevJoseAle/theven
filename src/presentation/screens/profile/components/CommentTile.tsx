import { View, Text } from 'react-native';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';
import { Icon } from '@rneui/themed';
import { globalWhite, ratingColor } from '../../../../config/theme/globalStyles';
import { BlurView } from '@react-native-community/blur';

//TODO! Comentarios: Tomar de la bbdd, actualmente ligados al mismo llamado de eventos de la agenda
interface Props {
    event: EventTimeLineEntity
}
const CommentTile = ({ event }: Props) => {
    return (
        <BlurView
        blurType="dark"
        blurAmount={10}
        style={{ flexDirection: 'column', width: '95%', alignSelf: 'center', height: 170, backgroundColor: '#333333', marginHorizontal: 15, marginTop: 10, borderRadius: 10, borderWidth:0.3, borderColor:'#5A5A5A' }}>

            {/* Rating */}
            <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:10, alignContent: 'center'}}>
                <Text style={{fontWeight: 'bold', justifyContent: 'center', color: globalWhite , fontSize: 17}}> Rating: </Text>
                <Icon name="star-half" type="ionicon" color={ratingColor} style={{marginLeft: 10}} />
                <Text style={{fontWeight: 'bold', justifyContent: 'center',color : ratingColor, fontSize: 17 }}> {event.rating} </Text>
            </View>

            {/* Evento del comentario + fecha del comentario */}

            <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:5, alignContent: 'center'}}>
                <Text style={{fontWeight: 'bold', justifyContent: 'center', color: globalWhite , fontSize: 14}}>Evento:  {event.eventName} </Text>
            </View>
            {/* Commentario */}
            <View style={{flexDirection: 'column', paddingHorizontal: 10 ,justifyContent: 'center',marginTop:5, alignContent: 'center'}}>

                <View>
                    <Text style={{fontWeight: 'bold', justifyContent: 'center', color: globalWhite , fontSize: 14}}> John Doe  </Text>
                </View>
                {/* Nombre Usuario: */}
                <View>
                    <Text numberOfLines={4} style={{textAlign:'justify', color: globalWhite , fontSize: 14, marginTop: 5}}> Commodo magna eiusmod esse tempor voluptate aliqua esse sit et mollit est. Duis enim laboris eiusmod ad cupidatat sint ex proident occaecat magna est. Aliqua deserunt eu laborum enim cillum. Adipisicing nostrud consectetur laboris Lorem in duis minim dolore anim fugiat dolor voluptate do. Enim reprehenderit minim laborum veniam culpa. </Text>
                </View>
                {/* Descripcion */}

            </View>
        </BlurView>
    );
};
export default CommentTile;
