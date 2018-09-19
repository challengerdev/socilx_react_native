/**
 * TODO list:
 * 1. Data props: currentUser, settingsLoading
 * 2. Action props: updateUserProfile, doLogout
 */

import * as React from 'react';
import {currentUser} from '../../../mocks';
import {SettingsData} from '../../../screens/myProfile/SettingsScreen.view';
import {ICurrentUser, ITranslatedProps} from '../../../types';

const mock: IWithSettingsEnhancedProps = {
	data: {
		currentUser,
		settingsLoading: false,
	},
	actions: {
		updateUserProfile: (saveData: SettingsData, avatarHasChanged: boolean) => {
			/**/
		},
		doLogout: () => {
			/**/
		},
		getText: (value: string, ...args: any[]) => value,
	},
};

export interface IWithSettingsEnhancedData {
	currentUser: ICurrentUser;
	settingsLoading: boolean;
}

export interface IWithSettingsEnhancedActions extends ITranslatedProps {
	updateUserProfile: (saveData: SettingsData, avatarHasChanged: boolean) => void;
	doLogout: () => void;
}

interface IWithSettingsEnhancedProps {
	data: IWithSettingsEnhancedData;
	actions: IWithSettingsEnhancedActions;
}

interface IWithSettingsProps {
	children(props: IWithSettingsEnhancedProps): JSX.Element;
}

interface IWithSettingsState {}

export class WithSettings extends React.Component<IWithSettingsProps, IWithSettingsState> {
	render() {
		return this.props.children({data: mock.data, actions: mock.actions});
	}
}
