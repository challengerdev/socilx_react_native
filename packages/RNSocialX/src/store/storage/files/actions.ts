/**
 * TODO
 * 0. extract the hash from the response of the api
 * 1. add abort action 'abortUpload
 * 2. add a property 'failed' or 'error' on the state to handle errors
 */

import { IListenerProgess } from 'react-native-background-upload';
import { ActionCreator } from 'redux';
import uuidv4 from 'uuid/v4';
import { IThunk } from '../../types';
import { setError } from '../../ui/activities';
import {
	ActionTypes,
	ISetUploadStatusAction,
	ISetUploadStatusInput,
	IUploadFileAction,
	IUploadFileInput,
} from './Types';

const setUploadStatusAction: ActionCreator<ISetUploadStatusAction> = (
	setUploadProgressInput: ISetUploadStatusInput,
) => ({
	type: ActionTypes.SET_UPLOAD_STATUS,
	payload: setUploadProgressInput,
});

export const setUploadStatus = (
	setUploadProgressInput: ISetUploadStatusInput,
): IThunk => async (dispatch, getState, context) => {
	try {
		dispatch(setUploadStatusAction(setUploadProgressInput));
	} catch (e) {
		dispatch(
			setError({
				type: ActionTypes.SET_UPLOAD_STATUS,
				error: e.message,
				uuid: uuidv4(),
			}),
		);
	}
};

const uploadFileAction: ActionCreator<IUploadFileAction> = (
	uploadFileInput: IUploadFileInput,
) => ({
	type: ActionTypes.UPLOAD_FILE,
	payload: uploadFileInput,
});

export const uploadFile = (uploadFileInput: IUploadFileInput): IThunk => async (
	dispatch,
	getState,
	context,
) => {
	const { path } = uploadFileInput;
	const { storageApi } = context;
	try {
		dispatch(uploadFileAction(uploadFileInput));

		const bootstrapStatus = (uploadIdStarted: string) => {
			dispatch(
				setUploadStatus({
					path,
					uploadId: uploadIdStarted,
					progress: 0,
					aborting: false,
					done: false,
					hash: '',
				}),
			);
		};

		const updateStatus = ({
			uploadId: uploadIdUpdated,
			progress,
		}: IListenerProgess & { uploadId: string }) => {
			dispatch(
				setUploadStatus({
					uploadId: uploadIdUpdated,
					progress,
					path,
					aborting: false,
					done: false,
					hash: '',
				}),
			);
		};

		const { uploadId, responseBody } = await storageApi.uploadFile(
			path,
			bootstrapStatus,
			updateStatus,
		);
		const { Hash: hash } = JSON.parse(responseBody);

		dispatch(
			setUploadStatus({
				uploadId,
				progress: 100,
				path,
				aborting: false,
				done: true,
				hash,
			}),
		);
		// TODO: extract the hash from 'responseBody' and store it somewhere
	} catch (e) {
		// TODO: add proper error handling here
	}
};
