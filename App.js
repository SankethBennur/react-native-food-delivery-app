import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppNavigation from './AppNavigation';

export default function App()
{
	return (
		<View style={ styles.container }>
			<Text>My food delivery app!</Text>
			<StatusBar style="auto" />
			<AppNavigation />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		height: "100%",
		// width: "100%",
		// alignItems: 'center',
		// justifyContent: 'center',
	}
});
