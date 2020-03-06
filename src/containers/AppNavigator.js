import { createStackNavigator } from 'react-navigation';
import LandingPage from './LandingPage';

const AppNavigator = createStackNavigator({
  LandingPage: {screen: LandingPage}
})

export default AppNavigator;