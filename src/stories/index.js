import React from 'react';
import mockData from '../mockData'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Widget from '../components/widget/Widget';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('Widget', module)
    .add('initial state', () => <Widget opened={false} data={false}/>)
    .add('opened frame', () => <Widget opened={true} data={false}/>)
    .add('frame with some data', ()=><Widget opened={true} data={mockData}/>)
