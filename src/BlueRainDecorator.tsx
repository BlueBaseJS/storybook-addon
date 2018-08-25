import { BlueRain, BootOptions, default as _BR } from '@blueeast/bluerain-os';
import React from 'react';

const BlueRainDecorator = (maybeEsConfigs: any, BR = _BR) => (storyFn: any) => {

	const configs: BootOptions = maybeEsConfigs.default ? maybeEsConfigs.default : maybeEsConfigs;

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

	const BluerainApp = BR.boot(allConfigs);
	return <BluerainApp />;
};

export default BlueRainDecorator;
