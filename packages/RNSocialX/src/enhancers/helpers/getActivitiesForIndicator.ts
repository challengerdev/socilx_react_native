import { ActionTypes as AccountActionTypes } from '../../store/data/accounts/Types';
import { ActionTypes as PostActionTypes } from '../../store/data/posts/Types';
import { ActionTypes as ProfileActionTypes } from '../../store/data/profiles/Types';
import { IActivity } from '../../store/ui/activities';

export const getActivitiesForIndicator = (activities: IActivity[]) => {
	for (const activity of activities) {
		if (
			activity.type === AccountActionTypes.GET_CURRENT_ACCOUNT ||
			activity.type === AccountActionTypes.CREATE_ACCOUNT ||
			activity.type === ProfileActionTypes.GET_CURRENT_PROFILE ||
			activity.type === PostActionTypes.GET_PUBLIC_POSTS_BY_DATE
		) {
			return true;
		}
	}

	return false;
};