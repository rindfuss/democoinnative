import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './CoinView';

export default function Home(props) {
	const setRefreshDate = (date) => {
		if (props.navigation) {
			props.navigation.setParams({refreshDate: date});
		}
	};
	
	return (
     	<View style={styles.container}>
			<CoinView 
				navigation={props.navigation}
				refreshDate={setRefreshDate}
				style={styles.coinView} 
			/>
      	</View>
    );
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
  	},
  	coinView: {
	  	width: '100%',
	  	flex: 1,
	  	flexDirection: 'column',
	  	backgroundColor: 'white',
  }
});