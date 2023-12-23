import test from 'node:test'
import TextInput from './TextInput.vue'

export default {
  component: TextInput,
  title: 'Text Input',
  tags: ['autodocs']
}

export const Default = {
  args: {
    name: 'Search',
    type: 'text',
    id: 'searchBar',
    label: 'Search',
    placeholder: 'Enter your query...',
    icon: 'bi bi-search'
  }
}
