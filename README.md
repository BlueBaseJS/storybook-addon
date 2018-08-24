<p align="center">
  <h1 style="text-align:center;">BlueRain Storybook Addon</h1>
</p>

## Getting started

### Installation:
```sh
npm i --save-dev @blueeast/bluerain-storybook-addon
```

### Configuration

```javascript
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

### Usage

In your story, test a BlueRain component like this:

```typescript
import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import React from 'react';
import storiesOf from '@blueeast/bluerain-storybook-addon';


storiesOf('Some Story', module)
	.add('story', () => (
		<BlueRainConsumer>
			{(BR: BlueRain) => <BR.Components.SomeComponent title="A nice component" />}
		</BlueRainConsumer>
	));
```