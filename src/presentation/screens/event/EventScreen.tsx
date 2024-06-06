import { useEffect, useState } from 'react';
import {  ScrollView, View } from 'react-native';
import { getEventById } from '../../../actions/events/getEventById';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../config/navigation/NavStack';
import DetailHeader from './components/DetailHeader';
import { EventByIDEntity } from '../../../domain/events/eventByIdEntity';
import DetailBody from './components/DetailBody';

interface Props extends StackScreenProps<RootStackParams, 'Event'> { }
export const EventScreen = ({route}: Props) => {
  const  {eventId} = route.params;
  console.log(route.params);
   const [singleEvent, setSingleEvent] = useState<EventByIDEntity>({} as EventByIDEntity);
   const getEvent = async () => {
     try {
       const event = await getEventById(eventId);
       if (event === undefined) { return; }
       setSingleEvent(event);
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(() => {
    getEvent();
   }, []);

  return (
    <ScrollView style={{ backgroundColor:'#2f323f'}}>

      <DetailHeader event={singleEvent} />
      <DetailBody event={singleEvent} />
      <View style={{height: 50}} />
    </ScrollView>
  );
};
