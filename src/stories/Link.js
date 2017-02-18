import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Link from '../components/Link';

storiesOf('<Link />', module)
  .add(' ', () => (
    <Link>Link text</Link>
  ))
  .add('with href and target', () => (
    <Link href="http://example.com" target="_blank">Link text</Link>
  ))
  .add('without link AND with style {color: red}', () => (
    <Link style={{color: 'red'}}>Link text</Link>
  ))
  .add('without link AND with class \'btn-link\'', () => (
    <Link className="btn-link">Link text</Link>
  ))
