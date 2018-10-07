import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Login',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./home.png'),
      title: 'Screen One'
    },
    {
      label: 'Home',
      screen: 'example.SecondTabScreen',
      icon: require('./home.png'),
      title: 'Screen Two'
    }
  ]
});