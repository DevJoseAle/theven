import { View } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import { globalBackgroundColor } from '../../../config/theme/globalStyles';
import { useEffect, useState } from 'react';
import { getEventsForTimeline } from '../../../actions/events/getEventsForTimeline';
import { EventTimeLineEntity } from '../../../domain/events/eventTimeLineEntity';
import LoadingScreen from '../loading/LoadingScreen';
import { ProfileBody } from './components/ProfileBody';
const ProfileScreen = () => {


  const [newEvents, setNewEvents] = useState<EventTimeLineEntity[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getNewEvents = async () => {

    try {
      const events = await getEventsForTimeline();
      if (events === undefined) { return; }
      setNewEvents(events);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getNewEvents();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <View style={{ flex: 1, backgroundColor: globalBackgroundColor }}>

      {/* Header */}
      <ProfileHeader />
      {/* Body */}
      <ProfileBody newEvents={newEvents} getNewEvents={getNewEvents} isLoading={isLoading} />
    </View>
  );
};

export default ProfileScreen;
