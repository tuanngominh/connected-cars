import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../components/Button';

storiesOf('<Button />', module)
  .add('class="btn btn-default" style="color:red" type="submit" name="submit"', () => (
    <Button type='submit' name='submit' style={{color: 'red'}} className='btn btn-default'>Button text</Button>
  ))
  .add('without style, class - with onClick', () => (
    <Button onClick={() => {alert('button click')}}>Button text</Button>
  ))
