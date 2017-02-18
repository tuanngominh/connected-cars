import { configure } from '@kadira/storybook'

function loadStories() {  
  require('../src/stories/Link.js')
  require('../src/stories/Button.js')
  require('../src/stories/Header1.js')
  require('../src/stories/Image.js')
  require('../src/stories/Table.js')
  require('../src/stories/MyComponent.js')
}

configure(loadStories, module)
