import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
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
	
	return (
      <AppContainer />
    );
}