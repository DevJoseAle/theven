import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../presentation/screens/home/HomeScreen';
import ScheduleScreen from '../../presentation/screens/schedule/ScheduleScreen';
import ProfileScreen from '../../presentation/screens/profile/ProfileScreen';
import CreateEvent from '../../presentation/screens/event/CreateEvent';
import CustomAppBar from '../../presentation/components/ui/CustomAppBar';
import SearchScreen from '../../presentation/screens/search/SearchScreen';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';


const Tab = createBottomTabNavigator();

//Definicion de options y componentes:

const HomeScreenOptions = {
  header: () => <CustomAppBar />,
  tabBarIcon: ({ color, size }: { color: string; size: number }) => <Icon color={color} size={size} name="home-outline" type="ionicon" />,
};

const ScheduleScreenOptions = {
  headerShown: false,
  tabBarIcon: ({ color, size }: { color: string; size: number }) => <Icon color={color} size={size} name="calendar-outline" type="ionicon" />,
};

const CreateEventOptions = {
  tabBarIcon: ({ color }: { color: string}) => <Icon color={color} size={40} name="add-circle-outline" type="ionicon" />,
};

const SearchScreenOptions = {
  tabBarIcon: ({ color, size }: { color: string; size: number }) => <Icon color={color} size={size} name="search-outline" type="ionicon" />,
};

const ProfileScreenOptions = {
  headerShown: false,
  tabBarIcon: ({ color, size }: { color: string; size: number }) => <Icon color={color} size={size} name="person-outline" type="ionicon" />,
};


export const  BottomTabNav = ()=> {
  return (
    <Tab.Navigator
    initialRouteName="Home" screenOptions={{
      tabBarShowLabel: false,
    }}
    tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={HomeScreenOptions} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} options={ScheduleScreenOptions} />
      <Tab.Screen name="CreateEvent" component={CreateEvent}
      options={CreateEventOptions} />
      <Tab.Screen name="Search" component={SearchScreen}
      options={SearchScreenOptions}/>
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={ProfileScreenOptions}/>
    </Tab.Navigator>
  );
};



const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.blurView} blurType="dark" blurAmount={4} />
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: isFocused ? '#fe4655' : '#E0E0E0', size: 30 })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
  },
  blurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    marginTop:10,
  },
});
