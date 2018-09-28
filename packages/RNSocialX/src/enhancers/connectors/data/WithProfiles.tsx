import {
	IAcceptFriendInput,
	IAddFriendInput,
	ICreateProfileInput,
	IRemoveFriendInput,
	IUpdateProfileInput,
} from '@socialx/api-data';
import * as React from 'react';
import { connect, ConnectedComponentClass } from 'react-redux';
import { createSelector } from 'reselect';
import { IApplicationState } from '../../../store';
import {
	createProfile,
	getCurrentProfile,
	getProfileByUsername,
	getPublicKeyByUsername,
	IProfile,
	IUsernameInput,
} from '../../../store/data/profiles';
import {
	acceptFriend,
	addFriend,
	removeFriend,
} from '../../../store/data/profiles/actions';
import { IThunkDispatch } from '../../../store/types';

interface IDataProps {
	profiles: IProfile[] | null;
	currentProfile: IProfile | null;
}

interface IActionProps {
	getPublicKeyByUsername: (getPublicKeyByUsernameInput: IUsernameInput) => void;
	getCurrentProfile: () => void;
	getProfileByUsername: (getProfileByUsernameInput: IUsernameInput) => void;
	createProfile: (createProfileInput: ICreateProfileInput) => void;
	updateProfile: (updateProfileInput: IUpdateProfileInput) => void;
	addFriend: (addFriendInput: IAddFriendInput) => void;
	removeFriend: (removeFriendInput: IRemoveFriendInput) => void;
	acceptFriend: (acceptFriendInput: IAcceptFriendInput) => void;
}

type IProps = IDataProps & IActionProps;

interface IChildren {
	children: (props: IProps) => JSX.Element;
}

class Enhancer extends React.Component<IProps & IChildren> {
	render() {
		const { children, ...props } = this.props;
		return children(props);
	}
}

const selectProfiles = createSelector(
	(state: IApplicationState) => state.data.profiles.profiles,
	(profiles) => profiles,
);

const selectCurrentProfile = createSelector(
	(state: IApplicationState) => state.data.profiles.currentProfile,
	(currentProfile) => currentProfile,
);

const mapStateToProps = (state: IApplicationState) => ({
	profiles: selectProfiles(state),
	currentProfile: selectCurrentProfile(state),
});

const mapDispatchToProps = (dispatch: IThunkDispatch) => ({
	getPublicKeyByUsername: (getPublicKeyByUsernameInput: IUsernameInput) =>
		dispatch(getPublicKeyByUsername(getPublicKeyByUsernameInput)),
	getCurrentProfile: () => dispatch(getCurrentProfile()),
	getProfileByUsername: (getProfileByUsernameInput: IUsernameInput) =>
		dispatch(getProfileByUsername(getProfileByUsernameInput)),
	createProfile: (createProfileInput: ICreateProfileInput) =>
		dispatch(createProfile(createProfileInput)),
	addFriend: (addFriendInput: IAddFriendInput) =>
		dispatch(addFriend(addFriendInput)),
	removeFriend: (removeFriendInput: IRemoveFriendInput) =>
		dispatch(removeFriend(removeFriendInput)),
	acceptFriend: (acceptFriendInput: IAcceptFriendInput) =>
		dispatch(acceptFriend(acceptFriendInput)),
});

export const WithProfiles: ConnectedComponentClass<
	JSX.Element,
	IChildren
> = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Enhancer as any) as any;