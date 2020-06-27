import React from 'react';
import { WebView } from 'react-native-webview';
import { getCoinYoutubeUrl } from '../libs/Constants';

export default function Youtube(props) {
	const title = props.navigation.getParam('title', '');
	const uri = getCoinYoutubeUrl(title);
	return (
		<WebView
			source={{ uri: uri }}
			style={{ marginTop: 20 }}
		/>
	);
}