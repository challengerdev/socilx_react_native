import { ICommentIdInput, ICreateCommentInput } from './Types';

export { default as reducer } from './reducer';
export {
	IState,
	IAction,
	ICommentData,
	ICommentIdInput,
	ICreateCommentInput,
	IPostIdInput,
} from './Types';
export {
	createComment,
	getCommentLikes,
	getPostComments,
	likeComment,
} from './actions';