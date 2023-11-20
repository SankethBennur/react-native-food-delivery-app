import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import ProfileScreen from "./src/screens/ProfileScreen";

const Bottom_Tab_Navigator = createBottomTabNavigator();
const Stack_Navigator = createStackNavigator();

const HomeNavigation = () =>
{
	return (
		<Stack_Navigator.Navigator>
			<Stack_Navigator.Screen name="Home" component={HomeScreen} />
			<Stack_Navigator.Screen name="Restaurant" component={RestaurantScreen} />
		</Stack_Navigator.Navigator>
	);
}

const ScreenTabNavigation = () =>
{
	return (
		<Bottom_Tab_Navigator.Navigator>
			<Bottom_Tab_Navigator.Screen name="Home" component={HomeNavigation} />
			{/* Careful!! HomeNavigation above! Not HomeScreen */}
			<Bottom_Tab_Navigator.Screen name="Profile" component={ProfileScreen} />
		</Bottom_Tab_Navigator.Navigator>
	);
}

const AppNavigation = () =>
{
	return (
		<NavigationContainer style={ styles.AppNavigation }> 
			<ScreenTabNavigation style={ styles.AppNavigation } />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	AppNavigation: {
		width: "100%"
	}
});

export default AppNavigation;
