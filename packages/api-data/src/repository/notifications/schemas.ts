import yup from 'yup';

const notificationTypes = [
	'RECENT_COMMENT',
	'FRIEND_REQUEST',
	'FRIEND_REQUEST_RESPONSE',
	'GROUP_REQUEST',
	'SUPER_LIKED',
];
const stringType = yup
	.string()
	.trim()
	.min(1)
	.max(50);

const notificationType = yup.string().oneOf(notificationTypes);

const accountType = yup.object().shape({
	alias: stringType.required(),
	pub: stringType.required(),
});

export const createNotification = yup
	.object()
	.shape({
		type: notificationType.required(),
		from: accountType.required(),
		to: accountType.required(),
		timestamp: yup.number().required(),
	})
	.required();

export const removeNotification = yup
	.object()
	.shape({
		notificationId: stringType.required(),
	})
	.required();

export const getNotificationById = yup
	.object()
	.shape({
		notificationId: stringType.required(),
	})
	.required();

export default { createNotification, removeNotification, getNotificationById };