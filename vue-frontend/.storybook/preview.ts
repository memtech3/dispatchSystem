import type { Preview } from '@storybook/vue3'
import '../src/index.css'
import { initFlowbite } from 'flowbite'
initFlowbite()
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
