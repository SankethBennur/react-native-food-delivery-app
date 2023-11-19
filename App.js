import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FoodCard from './src/components/common/FoodCard';

export default function App()
{
	return (
		<View style={ styles.container }>
			<Text>My food delivery app!</Text>
			<FoodCard
				image_url="https://www.bhg.com/thmb/L42rOmj0pORpp2WwEwwXSltF-X4=/1244x0/filters:no_upscale():strip_icc()/thin-crust-pepperoni-vegetable-pizza-RU207102-9d5b6151a9074ec18a7af235fb332d83.jpg"
				title="Thin Crust Vegetable Pizza"
				description="Piled with flavorful veggies like peppers and artichokes, this vegetarian pizza will be a hit at your next pizza night! Fresh basil takes it over the top."
				price="7.0"
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
