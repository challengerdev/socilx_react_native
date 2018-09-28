import { IUsernameInput } from './Types';

export { default as reducer } from './reducer';
export { IState, IAction, IProfile, IUsernameInput } from './Types';
export {
	createProfile,
	getCurrentProfile,
	getProfileByUsername,
	getPublicKeyByUsername,
} from './actions';