import React from 'react';
import mockData from '../mockData';

import { storiesOf } from '@storybook/react';
import Widget from '../components/widget/Widget';

storiesOf('Widget', module)
  .add('initial state', () => <Widget opened={false} data={false} />)
  .add('opened frame', () => <Widget opened data={false} />)
  .add('frame with some data', () => <Widget opened data={mockData} />);
