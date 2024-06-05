import { View } from 'react-native';
import { Agenda, } from 'react-native-calendars';
import items from '../../../../data.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/base';
import { Avatar, Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ScheduleScreen = () => {

  //TODO: MAPEAR LOS EVENTOS QUE VIENEN DE SUPABAS COMO UN AGENDA ENTRY
  const renderEvents = (event: any, firstItemInDay:boolean) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: firstItemInDay ? 17 : 0, marginBottom:0}}>

        <Card containerStyle={{backgroundColor: '#2f323f', justifyContent: 'flex-start', alignItems: 'flex-start', borderRadius: 10}}>

          <Card.Title style={{ color: 'white', fontSize: 15, textAlign: 'left' }}>{event.name}</Card.Title>
          <Text style={{ color: 'white', fontSize: 15, textAlign: 'left' }}>10:00 am a 11:00 am</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>

          <Avatar
          size={32}
          rounded
          title="Rd"
          containerStyle={{ backgroundColor: "blue" }} />

          <Text style={{ color: 'white', fontSize: 15, textAlign: 'left', marginLeft: 10, alignSelf:'center' }}>Productor del Evento</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  return (


    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Agenda
           renderEmptyData={() => {
            return <View />;
          }}
          renderEmptyDate={() => <View />}
            items={items}
            renderItem={(day, firstItemInDay) => {
              return renderEvents(day, firstItemInDay);
            }}
            onDayPress={(day) => {
              console.log('selected day', day);
            }}
            showClosingKnob
            style={{ width: '100%', height: '100%' }}
            theme={{

              agendaDayNumColor: '#2f323f',
              agendaDayTextColor: '#2f323f',
              agendaKnobColor: '#FE4655A1',
              agendaTodayColor: '#FE4655A1',

              backgroundColor: '#FFFFFF',
              calendarBackground: '#2f323f',
              dayTextColor: '#E0E0E0',
              monthTextColor: '#E0E0E0',
              selectedDayBackgroundColor: '#FE4655A1',
              textDayFontFamily: 'Poppins',
              textMonthFontSize: 20,

            }} />
        </View>
      </View>
      <View style={{height: 76}} />
    </SafeAreaView>
  );
};
export default ScheduleScreen;
