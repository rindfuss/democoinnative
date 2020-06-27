import React, { useState, useEffect, useRef } from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import CoinItem from '../components/CoinItem';
import { getCoinIconUri as getCoinUri } from '../libs/Constants';
import MorphBall from '../libs/MorphBall';
import { TouchableOpacity } from 'react-native';
  
const CoinView = (props) => {
	const [coinDatas, setCoinDatas] = useState([]);
	const [isQueryRunning, setIsQueryRunning] = useState(false);
	//const isQueryRunning = useRef(false);
	const instanceNum = useRef(1);

	const abortController = new AbortController();
	const abortSignal = abortController.signal;

	useEffect(()=> {
		//console.log('called useEffect');
		const timeoutMS = 10000;
	
		getCoinDatas(instanceNum.current++);
		/*
		const interval = setInterval( () => {
			getCoinDatas(instanceNum.current++);
		}, timeoutMS);
		*/
		
	
		return (function cleanup() {
			//console.log("Clearing interval: " + interval);
			//clearInterval(interval);
			abortController.abort;
		});
	},[]);

	async function getCoinDatas(iNum) {
		//console.log('inside getCoinDatas (' + iNum + ').');
		//console.log('- isQueryRunning: ' + isQueryRunning.current);
		if (!isQueryRunning) {
			setIsQueryRunning(true);
			try {
				fetch(`http://rpr.calmss.com/bitcoin.php`, {signal: abortSignal})
				.then(response => {
					//console.log("- Got json (" + iNum + ") at " + ((new Date()).toLocaleString()));
					return response.json();
				})
				.then(data => {
					const date = new Date();
					const now = date.toLocaleString();
					if (props.refreshDate != null) {
						props.refreshDate(now);
					}
					setCoinDatas(data);
					//console.log("- Set data (" + iNum + ")");
					//setTimeout(() => { getCoinDatas(10); }, timeoutMS);
					setIsQueryRunning(false);
				});
			} catch(error) {
				console.error('- getCoinDatas (' + iNum + ') error:', error);
				//setTimeout(() => { getCoinDatas(10); }, timeoutMS);
				setIsQueryRunning(false);
			}
		}
		else {
			//console.log('- Exit without running again');
		}
	}

	const renderItem = ({item}) => {
		const {rank, name, price_usd, market_cap_usd} = item;
		return (
			<TouchableOpacity
				onPress={() => props.navigation && props.navigation.push('Youtube', {title: name})}
			>
				<CoinItem
					rank={rank}
					name={name}
					price={price_usd}
					volumn={market_cap_usd}
					iconUri={getCoinUri(name)}
				/>
			</TouchableOpacity>
		);
	};
	
	return ( 
		coinDatas.length == 0 ? (
			<View style={{...props.style, alignItems: 'center', justifyContent: 'center'}}>
				<View>
					<MorphBall diameter={100} style={{backgroundColor: 'blue'}}>
					</MorphBall>
				</View>
				<View style={{position: 'absolute', top: '50%', marginTop: 60}}>
					<Text>Loading...</Text>
				</View>
			</View>
		) : (
			<FlatList 
				style={{...props.style} }
				data={coinDatas}
				keyExtractor={(item) => item.rank.toString()}
				renderItem={renderItem}
				refreshing={isQueryRunning}
				onRefresh={getCoinDatas}
			/>
		)
	);	
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'column', // row
	  backgroundColor: 'skyblue',
	},
});

export default CoinView;