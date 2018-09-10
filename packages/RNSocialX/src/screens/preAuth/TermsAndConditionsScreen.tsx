import * as React from 'react';
import {Platform, SafeAreaView, View, WebView} from 'react-native';

import {OS_TYPES} from '../../environment/consts';
import {ITranslatedProps} from '../../types';
// @ts-ignore
import TermsAndConditionsHTML from './terms-and-conditions.html';
import styles from './TermsAndConditionsScreen.style';

export class TermsAndConditionsScreen extends React.Component<ITranslatedProps> {
	public static navigationOptions = (props: any) => ({
		title: props.navigationOptions.getText('terms.and.conditions.screen.title'),
		headerRight: <View />,
	});

	public render() {
		const webViewLocalSource =
			Platform.OS === OS_TYPES.IOS
				? TermsAndConditionsHTML
				: {uri: 'file:///android_asset/html/terms_and_conditions.html'};
		return (
			<SafeAreaView style={styles.container}>
				<WebView source={webViewLocalSource} />
			</SafeAreaView>
		);
	}
}