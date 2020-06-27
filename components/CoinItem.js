import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CoinItem = (props) => {
	let date = new Date();
	let now = date.toLocaleString();

	return (
		<View style={styles.container}>
			<Image
				style={{width: 50, height: 50, marginRight: 5, marginLeft: 5}}
				source={{ uri: props.iconUri}}
			/>
			<View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
				<View>
					<Text style={{...styles.text, flex: 1, fontSize: 20, marginTop: 5}}>
						{props.name || 'Name'}
					</Text>
					<Text style={{...styles.text, flex: 1, color: 'darkgrey'}}>
						{'Volume: ' + (props.volumn || 0)}
					</Text>
					<Text style={{...styles.text, flex: 1}}>
						{'$: ' + (props.price || 0)}
					</Text>
				</View>
				<Text style={{...styles.text, fontSize: 25, marginRight: 10}}>
					{'#' + (props.rank || 'Rank')}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
	  width: '100%',
	  height: 80,
	  flexDirection: 'row', // row
	  backgroundColor: 'white',
	  alignItems: 'center',
	  //justifyContent: 'space-around', // center, space-around
	  marginTop: 5,
	  marginBottom: 5,
	  borderBottomWidth: 1,
	  borderBottomColor: 'lightgrey',
	},
	text: {
	  color: 'black'
	}
});

export default CoinItem;