import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';

import { ReportProblemModal } from '../../../../src/components';
import { getTextMock } from '../../../../src/mocks';
import CenterView from '../../../helpers/CenterView';

storiesOf('Components/modals', module)
	.addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.add('ReportProblemModal', () => {
		const visible = boolean('visible', true);

		return (
			<ReportProblemModal
				visible={visible}
				confirmHandler={action('Confirm')}
				declineHandler={action('Decline')}
				getText={getTextMock}
			/>
		);
	});
