import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import MyComponent from '../components/MyComponent';

storiesOf('MyComponent', module)
  .add(' ', () => (
    <MyComponent />
  ));
