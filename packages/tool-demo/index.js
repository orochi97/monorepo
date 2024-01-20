/**
 * @format
 */

import {runUtils} from '@tool/utils';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

runUtils();

AppRegistry.registerComponent(appName, () => App);
