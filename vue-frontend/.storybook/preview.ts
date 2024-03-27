import type { Preview, VueRenderer } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import PrimeVue from 'primevue/config'
import Wind from '@/themes/wind' //import preset

import '../src/tailwind.css'

import { withThemeByClassName } from '@storybook/addon-themes'

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
  },
  decorators: [
    withThemeByClassName<VueRenderer>({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'dark'
    })
  ]
}

export default preview
