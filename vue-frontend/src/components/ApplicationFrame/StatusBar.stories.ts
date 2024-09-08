import type { Meta, StoryObj } from '@storybook/vue3'

import StatusBar from './StatusBar.vue'

const meta: Meta<typeof StatusBar> = {
  component: StatusBar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof StatusBar>

export const Primary: Story = {}
