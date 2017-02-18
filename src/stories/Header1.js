import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Header1 from '../components/Header1';

storiesOf('<Header1 />', module)
  .add('style="color:red"', () => (
    <Header1 style={{color: 'red'}}>Header1 text</Header1>
  ))
