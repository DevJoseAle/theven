import { View,ScrollView } from 'react-native';
import { EventCard } from './EventCard';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';


interface Props {
    newEvents: EventTimeLineEntity[]
}
const EventList = ({newEvents}: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, height: '100%' }}>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

      {
        newEvents.map((event) => <EventCard key={event.id} event={event} />)
      }
    </View>
    <View style={{ height: 100 }} />
  </ScrollView>
  );
};
export default EventList;
