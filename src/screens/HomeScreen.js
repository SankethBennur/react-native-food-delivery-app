import React from 'react';
import { View } from 'react-native';

import RestaurantList from '../components/Home/RestaurantList';

const HomeScreen = () => {
  return (
	<View style={{flex: 1}}>
		<RestaurantList />
	</View>
  )
}

export default HomeScreen;
