import { withBlueRain } from '@blueeast/bluerain-os';
// tslint:disable-next-line:no-implicit-dependencies
import React from 'react';

const bluerainStory = (component: React.ComponentType<any>) => {
	return () => {
		const Story = withBlueRain(component);
		return <Story />;
	};
};

export default bluerainStory;
