import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import Home from './app/screens/Home.js'
import ScreenOne from './app/screens/ScreenOne.js'
import ScreenTwo from './app/screens/ScreenTwo.js'
import ScreenThree from './app/screens/ScreenThree.js'
import End from './app/screens/End.js'


const AppNavigator = createStackNavigator({
	Home: {screen:Home},
	ScreenOne: {screen:ScreenOne},
	ScreenTwo: {screen:ScreenTwo},
	ScreenThree: {screen:ScreenThree},
	End: {screen:End}
});

const AppContainter = createAppContainer(AppNavigator)

export default AppContainter