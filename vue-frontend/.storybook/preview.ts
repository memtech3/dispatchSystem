import type { Preview } from '@storybook/vue3'
import '../src/index.css'
import { initFlowbite } from 'flowbite'
import { withThemeByClassName } from "@storybook/addon-themes";
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

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'dark'
  }),
];

export default preview
