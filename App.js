/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Youtube from './screens/YouTube';
import SplashScreen from 'react-native-splash-screen';
import Home from './screens/Home';

const Header = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>{props.title}</Text>
            <Text styel={{ fontSize: 13, color: 'gray' }}>{props.subtitle}</Text>
        </View>
    );
};

//const App: () => React$Node = () => {
function App() {
	useEffect(() => {
		SplashScreen.hide();
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
    
    return (
        <AppContainer />
    );
};

export default App;
