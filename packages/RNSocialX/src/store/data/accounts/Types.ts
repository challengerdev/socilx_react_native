import {
	IChangePasswordInput,
	ICreateAccountInput,
	ICredentials,
	IGetAccountByPubInput,
	IRecoverAccountInput,
} from '@socialx/api-data';
import { Action } from 'redux';
import { DeepReadonly } from 'utility-types';

export interface IAccount {
	alias?: string;
	username: string;
	pub: string;
}

export type IState = DeepReadonly<{
	accounts: IAccount[] | null;
	currentAccount: IAccount | null;
}>;

export const enum ActionTypes {
	CREATE_ACCOUNT = 'data/accounts/CREATE_ACCOUNT',
	RECOVER_ACCOUNT = 'data/accounts/RECOVER_ACCOUNT',
	TRUST_ACCOUNT = 'data/accounts/TRUST_ACCOUNT',
	GET_IS_ACCOUNT_LOGGED_IN = 'data/accounts/GET_IS_ACCOUNT_LOGGED_IN',
	CHANGE_PASSWORD = 'data/accounts/CHANGE_PASSWORD',
	LOGIN = 'data/accounts/LOGIN',
	LOGOUT = 'data/accounts/LOGOUT',
	GET_CURRENT_ACCOUNT = 'data/accounts/GET_CURRENT_ACCOUNT',
	GET_ACCOUNT_BY_PUB = 'data/accounts/GET_ACCOUNT_BY_PUB',
}

export interface ICreateAccountAction extends Action {
	type: ActionTypes.CREATE_ACCOUNT;
	payload: ICreateAccountInput;
}

export interface IRecoverAccountAction extends Action {
	type: ActionTypes.RECOVER_ACCOUNT;
	payload: IRecoverAccountInput;
}

export interface ITrustAccountAction extends Action {
	type: ActionTypes.TRUST_ACCOUNT;
}

export interface ILoginAction extends Action {
	type: ActionTypes.LOGIN;
	payload: ICredentials;
}

export interface ILogoutAction extends Action {
	type: ActionTypes.LOGOUT;
}

export interface IGetIsAccountLoggedInAction extends Action {
	type: ActionTypes.GET_IS_ACCOUNT_LOGGED_IN;
}

export interface IChangePasswordAction extends Action {
	type: ActionTypes.CHANGE_PASSWORD;
	payload: IChangePasswordInput;
}

export interface IGetCurrentAccountAction extends Action {
	type: ActionTypes.GET_CURRENT_ACCOUNT;
}

export interface IGetAccountByPubAction extends Action {
	type: ActionTypes.GET_ACCOUNT_BY_PUB;
	payload: IGetAccountByPubInput;
}

export type IAction =
	| ICreateAccountAction
	| ITrustAccountAction
	| IGetIsAccountLoggedInAction
	| IRecoverAccountAction
	| ILoginAction
	| ILogoutAction
	| IChangePasswordAction
	| IGetCurrentAccountAction
	| IGetAccountByPubAction;