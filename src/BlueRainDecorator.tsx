import { BlueRain, BootOptions, default as _BR } from '@blueeast/bluerain-os';
import React from 'react';

const BlueRainDecorator = (configs: BootOptions, BR = _BR) => (storyFn: any) => {

	const Component = () => storyFn();

	const StorybookPlugin = {
		pluginName: 'Storybook Plugin',
		hooks: {
			'bluerain.system.initialized': (ctx: BlueRain) => {
				ctx.Components.replace('SystemLayout', Component);
				return ctx;
			}
		}
	};

	const allConfigs = {
		renderApp: false,
		...configs
	};

	allConfigs.plugins = allConfigs.plugins || [];
	allConfigs.plugins.push(StorybookPlugin);

	console.log('abot to boot', allConfigs);
	const BluerainApp = BR.boot(allConfigs);
	return <BluerainApp />;
};

export default BlueRainDecorator;
