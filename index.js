if (__DEV__) {
    require('./ReactotronConfig');
    console.tron = Reactotron;
  }
  import 'react-native-devsettings/withAsyncStorage';

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Reactotron from './ReactotronConfig';

AppRegistry.registerComponent(appName, () => App);
