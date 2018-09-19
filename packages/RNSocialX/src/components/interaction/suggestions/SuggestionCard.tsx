import * as React from 'react';
import {Text, View} from 'react-native';

import {AvatarImage, ButtonSizes, IconButton, PrimaryButton} from '../../';
import {ISuggestionCardItem, ITranslatedProps} from '../../../types';
import styles, {colors} from './SuggestionCard.style';

interface ISuggestionCardProps extends ITranslatedProps {
	item: ISuggestionCardItem;
	deleteCard: () => void;
}

export const SuggestionCard: React.SFC<ISuggestionCardProps> = ({item, deleteCard, getText}) => (
	<View style={styles.container}>
		<AvatarImage image={item.avatarURL} style={styles.avatar} />
		<Text style={styles.name}>{item.name}</Text>
		<Text style={styles.reason}>Followed by placeholder</Text>
		{
			// @ts-ignore
			<PrimaryButton
				label={getText('button.add.friend')}
				size={ButtonSizes.Small}
				borderColor={colors.pink}
				textColor={colors.white}
				containerStyle={styles.buttonContainer}
				onPress={() => console.log('Add friend')}
			/>
		}
		<View style={styles.iconContainer}>
			{
				// @ts-ignore
				<IconButton iconSource={'ios-close'} iconType={'io'} onPress={deleteCard} iconStyle={styles.icon} />
			}
		</View>
	</View>
);
