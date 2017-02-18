import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Image from '../components/Image';
import imgSource from '../assets/milk-splash-2064088_640.jpg'

storiesOf('<Image />', module)
  .add('class="img-responsive"', () => (
    <Image src={imgSource} className='img-responsive'/>
  ))
  .add('show alt when no image found', () => (
    <Image src='http://fakeimagesource.fakeimagesource/fakeimagesource.jpg' alt="fakeimagesource.jpg"/>
  ))
