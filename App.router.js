import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SplashScreen } from 'react-native-splash-screen';
import Home from './screens/Home';
import Youtube from './screens/YouTube';

const Header = (props) => {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<Text style={{ fontSize: 18 }}>{props.title}</Text>
			<Text styel={{ fontSize: 13, color: 'gray' }}>{props.subtitle}</Text>
		</View>
	);
};

export default function App() {
	useEffect(() => {
		//SplashScreen.show();
		//setTimeout(() => {
		//	console.log("hiding");
			SplashScreen.hide();
		//}, 5000);
	}, []);

	const MainStack = createStackNavigator({
		Home: {
			screen: Home,
			navigationOptions: ( {navigation} ) => {
				return {
					headerTitle: () => (
						<Header
							title={'Show Me The Coin'}
							subtitle={navigation.getParam('refreshDate', '-')}
						/>
					),
					headerStyle: {
						backgroundColor: 'pink',
					},
				};
			},
		},
		Youtube: {
			screen: Youtube,
			navigationOptions: ( {navigation} ) => {
				return {
					title: navigation.getParam('title', 'YOUTUBE'),
				};
			}
		},
	}, {
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'pink',
			}
		}
	});
	
	const AppContainer = createAppContainer(MainStack);
	
	  	//<AppContainer />
	return (
	  	<View>
			<Text>Hello, World!</Text>
		</View>
    );
}