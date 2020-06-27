import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './CoinView';

export default function Home(props) {
	//const [refreshDate, setRefreshDate] = useState('-');

	const setRefreshDate = (date) => {
		if (props.navigation) {
			props.navigation.setParams({refreshDate: date});
		}
	};
	
	return (
      <View style={styles.container}>
		{/*<View style={styles.statusBar} />
		<TopBar 
			title="Show Me The Coin" 
			refreshDate={refreshDate} 
		/>*/}
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
	  //alignItems: 'center',
	  //justifyContent: 'flex-start'
  }
});