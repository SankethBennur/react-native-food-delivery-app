import React from 'react';
import { View, StyleSheet } from "react-native";

const Header = ({Heading1}) => {
  return (
	<View style={styles.heading1}>{Heading1}</View>
  )
}

const styles = StyleSheet.create({
	heading1: {
		fontSize: 25,
	}
});

export default Header;
