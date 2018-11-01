import moment from 'moment';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { IPostOwner, ITranslatedProps } from '../../../types';
import { OptionsMenuButton } from '../OptionsMenuButton';
import { Location, TaggedFriends } from './';

import styles, { defaultStyles, images } from './UserDetails.style';

interface IUserDetailsProps extends ITranslatedProps {
	user: IPostOwner;
	timestamp: Date;
	disableNavigation?: boolean;
	taggedFriends?: Array<{ fullName: string }>;
	location?: string;
	onUserPress: (userId: string) => void;
	onShowOptions: () => void;
}

export const UserDetails: React.SFC<IUserDetailsProps> = ({
	user,
	timestamp,
	disableNavigation,
	taggedFriends,
	location,
	onUserPress,
	onShowOptions,
	getText,
}) => {
	const date = moment(timestamp).format('MMM DD');
	const hour = moment(timestamp).format('hh:mma');

	return (
		<TouchableOpacity
			onPress={() => onUserPress(user.userId)}
			style={styles.container}
			disabled={disableNavigation}
		>
			<View style={{ flex: 1 }}>
				<FastImage
					source={user.avatar.length > 0 ? { uri: user.avatar } : images.user_avatar_placeholder}
					style={styles.smallAvatarImage}
				/>
			</View>
			<View style={styles.details}>
				<Text style={styles.fullName}>
					{user.fullName}
					<TaggedFriends friends={taggedFriends || []} getText={getText} />
					<Location location={location} getText={getText} />
				</Text>
				<Text style={styles.timestamp}>{`${date} at ${hour}`}</Text>
			</View>
			<View style={styles.dotsContainer}>
				<OptionsMenuButton
					iconColor={defaultStyles.advancedMenuButtonColor}
					onPress={onShowOptions}
				/>
			</View>
		</TouchableOpacity>
	);
};