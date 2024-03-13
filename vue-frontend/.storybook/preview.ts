import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-noir/theme.css'

import '../src/tailwind.css'

setup((app) => {
  app.use(PrimeVue)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
