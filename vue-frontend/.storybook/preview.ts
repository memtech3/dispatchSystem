import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import PrimeVue from 'primevue/config'
import Wind from '@/themes/wind' //import preset

import '../src/tailwind.css'

setup((app) => {
  app.use(PrimeVue, { unstyled: true, pt: Wind })
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
