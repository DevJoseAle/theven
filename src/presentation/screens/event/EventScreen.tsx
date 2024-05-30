import { useEffect, useState } from 'react';
import {  ScrollView } from 'react-native';
import { getEventById } from '../../../actions/events/getEventById';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../config/navigation/NavStack';
import DetailHeader from './components/DetailHeader';

interface Props extends StackScreenProps<RootStackParams, 'Event'> { }
export const EventScreen = ({route}: Props) => {
  const  {eventId} = route.params;
   const [singleEvent, setSingleEvent] = useState({});
   const getEvent = async () => {
     try {
       const event = await getEventById(eventId);
       if (event === undefined) { return; }
       setSingleEvent(event);
       console.log(event);
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(() => {
    getEvent();
    console.log('Effect',singleEvent);
   }, []);

  return (
    <ScrollView style={{ backgroundColor:'#2f323f'}}>

      <DetailHeader />

    </ScrollView>
  );
};
