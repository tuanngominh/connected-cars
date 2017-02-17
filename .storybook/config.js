import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/MyComponent.js');
}

configure(loadStories, module);
