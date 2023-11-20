import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./src/components/headers/src.components.headers.Header";

import HomeScreen from './src/screens/src.screens.HomeScreen';
import RestaurantScreen from './src/screens/src.screens.RestaurantScreen';
import CartScreen from "./src/screens/src.screens.cart";
import TrackScreen from "./src/screens/src.screens.track";
import ProfileScreen from "./src/screens/src.screens.ProfileScreen";

const Bottom_Tab_Navigator = createBottomTabNavigator();
const Stack_Navigator = createStackNavigator();

const HomeNavigation = () =>
{
	return (
		<Stack_Navigator.Navigator>
			<Stack_Navigator.Screen
				name="Home"
				component={ HomeScreen }
				// options={{
				// 	headerShown: false,
				// }}
				options={ ({ navigation }) => ({
					headerTitle: () => (
						<Header heading="Home" />
					),
					headerStyle: {
						paddingLeft: 4,
					}
				}) }
			/>
			<Stack_Navigator.Screen
				name="Restaurant"
				component={ RestaurantScreen }
				options={ ({ navigation }) => ({
					headerTitle: () => (
						<Header
							heading="Restaurant"
						// back_button
						// onPress={navigation.goBack}
						/>
					),
					headerStyle: {
						paddingLeft: 4,
					},
				}) }
			/>
		</Stack_Navigator.Navigator>
	);
}

const ProfileStack = () =>
(
	<Stack_Navigator.Navigator>
		<Stack_Navigator.Screen
			name="Profile"
			component={ ProfileScreen }
			// options={ {
			// 	headerShown: false
			// } }
			options={ ({ route }) => ({
				headerTitle: () => (
					<Header
						heading={ route.name }
					/>
				),
				headerStyle: {
					paddingLeft: 4,
				},
			}) }
		/>
		<Stack_Navigator.Screen
			name="Track"
			component={ TrackScreen }
			// options={ ({ navigation }) => ({
			// 	headerLeft: () => (
			// 		<Header
			// 			heading="< Back to Profile"
			// 			// back_button
			// 			// onPress={ navigation.goBack }
			// 		/>
			// 	),
			// 	headerStyle: {
			// 		paddingLeft: 4,
			// 	}
			// }) }
			options={ ({ route }) => ({
				headerTitle: () => (
					<Header
						heading={ route.name }
					/>
				),
				headerStyle: {
					paddingLeft: 4,
				},
			}) }
		/>
	</Stack_Navigator.Navigator>
);

const ScreenTabNavigation = () =>
{
	// Making header false for some Bottom Tab Navigation Screens
	// Since they have navigate to Stack Navigation Containers
	// And the back button of stack navigation appears as a header
	// under the header of Tab Navigation

	// Hence, Let there be a single header, with <- (back symbol) and Screen Name from Stack Screen

	return (
		<Bottom_Tab_Navigator.Navigator>
			<Bottom_Tab_Navigator.Screen
				name="Home"
				component={ HomeNavigation }
				options={ {
					// headerTitle: (props) => (<Header heading={ props.children } />)
					headerShown: false,
				} }
			/>
			{/* Careful!! HomeNavigation above! Not HomeScreen */ }

			<Bottom_Tab_Navigator.Screen
				name="Cart"
				component={ CartScreen }
				options={ {
					// headerTitle: (props) => (<Header heading={ props.children } />)
					// headerShown: false,
				} }
			/>

			<Bottom_Tab_Navigator.Screen
				name="Profile"
				component={ ProfileStack }
				options={ {
					// headerTitle: (props) => (<Header heading={ props.children } />)
					headerShown: false,
				} }
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
