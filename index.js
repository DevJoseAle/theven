if (__DEV__) {
    require('./ReactotronConfig');
    console.tron = Reactotron;
  }

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Reactotron from './ReactotronConfig';

AppRegistry.registerComponent(appName, () => App);
