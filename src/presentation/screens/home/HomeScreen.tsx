// import { View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { getEventsForTimeline } from '../../../actions/events/getEventsForTimeline';
import { EventTimeLineEntity } from '../../../domain/events/eventTimeLineEntity';
import { getCategories } from '../../../actions/events/getCategories';
import { CategoryEntity } from '../../../domain/events/categoriesEntity';
import EventList from './components/EventList';
import LoadingScreen from '../loading/LoadingScreen';
import { View } from 'react-native';
const HomeScreen = () => {
  // const { clearUser: logout } = useAuthStore();
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const [newEvents, setNewEvents] = useState<EventTimeLineEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allCategories, setAllCategories] = useState<CategoryEntity[]>([]);
  const getNewEvents = async () => {
    console.log(allCategories);
    try {
      const events = await getEventsForTimeline();
      if (events === undefined) { return; }
      setNewEvents(events);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategories = async () => {
    try {
      const categories = await getCategories();
      if (categories === undefined) { return; }
      setAllCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getAllCategories();
    getNewEvents();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen/>;
  }
  return (
    <View style={{ flex:1,backgroundColor:'#2f323f'}}>
      <EventList newEvents={newEvents} />
    </View>
  );
};
export default HomeScreen;



// const CategoryItem = ({ name }: { name: string }) => {
//   return (
//     <View style={{ width: 30, height: 30, backgroundColor:'red' }}>
//       <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'red', borderRadius: 10 }}>
//         {/* <Text>{name}</Text> */}
//       </TouchableOpacity>
//     </View>
//   );
// };



