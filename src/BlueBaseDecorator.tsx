import { BlueBase, BlueBaseApp } from '@bluebase/core';
import React from 'react';

const BlueBaseDecorator = (maybeEsConfigs: any) => (storyFn: any) => {

	const configs = maybeEsConfigs.default ? maybeEsConfigs.default : maybeEsConfigs;

	const Component: React.ComponentType<any> = () => storyFn();

	const StorybookPlugin = {
		name: 'Storybook Plugin',
		hooks: {
			'bluebase.boot.end': (bootOpts: any, _args: any, ctx: BlueBase) => {
				ctx.Components.replace('SystemApp', Component);
				return bootOpts;
			}
		}
	};

	const allConfigs = {
		renderApp: false,
		...configs
	};

	allConfigs.plugins = allConfigs.plugins || [];
	allConfigs.plugins.push(StorybookPlugin);

	// const BluerainApp = BB.boot(allConfigs);
	return <BlueBaseApp {...allConfigs} />;
};

export default BlueBaseDecorator;
