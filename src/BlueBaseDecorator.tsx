import { BlueBaseApp } from '@bluebase/core';
import React from 'react';

export const BlueBaseDecorator = (maybeEsConfigs: any) => (storyFn: any) => {

	const configs = maybeEsConfigs.default ? maybeEsConfigs.default : maybeEsConfigs;

	return (
		<BlueBaseApp {...configs} children={storyFn()} />
	);
};
