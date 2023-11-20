import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/src.screens.HomeScreen';
import RestaurantScreen from './src/screens/src.screens.RestaurantScreen';
import ProfileScreen from "./src/screens/src.screens.ProfileScreen";

const Bottom_Tab_Navigator = createBottomTabNavigator();
const Stack_Navigator = createStackNavigator();

const HomeNavigation = () =>
{
	return (
		<Stack_Navigator.Navigator>
			<Stack_Navigator.Screen
				name="Home"
				component={HomeScreen}
				options = {{ headerShown: false }}		// must return object containing title
			/>
			<Stack_Navigator.Screen
				name="Restaurant"
				component={RestaurantScreen}
				options = {{ headerShown: false }}
			/>
		</Stack_Navigator.Navigator>
	);
}

const ScreenTabNavigation = () =>
{
	return (
		<Bottom_Tab_Navigator.Navigator>
			<Bottom_Tab_Navigator.Screen
				name="Home"
				component={HomeNavigation}
				options = {({route}) => ({title: route.name})}
			/>
			{/* Careful!! HomeNavigation above! Not HomeScreen */}
			
			<Bottom_Tab_Navigator.Screen
				name="Profile"
				component={ProfileScreen}
				options = {({route}) => ({title: route.name})}
			/>
		</Bottom_Tab_Navigator.Navigator>
	);
}

const AppNavigation = () =>
{
	return (
		<NavigationContainer> 
			<ScreenTabNavigation />
		</NavigationContainer>
	)
}

export default AppNavigation;
