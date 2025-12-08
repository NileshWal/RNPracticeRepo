import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Routes } from './Routes';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import CustomText from '../components/CustomText';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText customText={'This is tab 1'} />
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText customText={'This is tab 2'} />
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText customText={'This is tab 3'} />
    </View>
  );
};

/* Profile Tab Navigation */
export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={'Tab1'} component={Tab1} />
      <ProfileTabs.Screen name={'Tab2'} component={Tab2} />
      <ProfileTabs.Screen name={'Tab3'} component={Tab3} />
    </ProfileTabs.Navigator>
  );
};

/* Main Drawer Navigation */
const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={Routes.Profile}
    >
      <Drawer.Screen name={Routes.Profile} component={Profile} />
      <Drawer.Screen name={Routes.SocialMedia} component={SocialMediaScreen} />
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

/* Main Stack Navigation */
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
