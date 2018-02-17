<p align="center">
  <h1 style="text-align:center;">BlueRain Storybook Addon</h1>
</p>

## Getting started

### Installation:
```sh
npm i --save-dev @blueeast/bluerain-storybook-addon
```

### Add to project

```js
import '@blueeast/bluerain-storybook-addon';
```

### Usage

```js
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BlueRainDecorator } from '@blueeast/bluerain-storybook-addon';

const BRConfigs = require('../bluerain');
addDecorator(BlueRainDecorator(BRConfigs));

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
```