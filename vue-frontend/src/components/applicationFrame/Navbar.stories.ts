import type { Meta, StoryObj } from '@storybook/vue3'

import Navbar from './Navbar.vue'

const meta: Meta<typeof Navbar> = {
  component: Navbar
}

export default meta
type Story = StoryObj<typeof Navbar>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Navbar },
    template: '<Navbar background="#ff0" label="Navbar" />'
  })
}

export const Secondary: Story = {
  render: () => ({
    components: { Navbar },
    template: '<Navbar background="#ff0" label="😄👍😍💯" />'
  })
}

export const Tertiary: Story = {
  render: () => ({
    components: { Navbar },
    template: '<Navbar background="#ff0" label="📚📕📈🤓" />'
  })
}
