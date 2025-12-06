import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Routes } from './Routes';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.Home}
    >
      <Drawer.Screen name={Routes.Profile} component={Profile} />
      <Drawer.Screen name={Routes.SocialMedia} component={SocialMediaScreen} />
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
