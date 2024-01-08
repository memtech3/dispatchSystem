import test from 'node:test'
import InputText from './InputText.vue'

export default {
  component: InputText,
  title: 'Input Text',
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
