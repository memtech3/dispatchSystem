import type { Preview, VueRenderer } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import PrimeVue from 'primevue/config'

import '../src/tailwind.css'
import '@patternfly/patternfly/patternfly.scss'
import '@patternfly/patternfly/patternfly-addons.scss'

import { withThemeByClassName } from '@storybook/addon-themes'

setup((app) => {
  app.use(PrimeVue, { unstyled: true })
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
        dark: 'dark bg-slate-950 pf-v5-theme-dark'
      },
      defaultTheme: 'dark'
    })
  ]
}

export default preview
