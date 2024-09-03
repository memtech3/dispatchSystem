import type { Meta, StoryObj } from '@storybook/vue3'

import CommandBar from './CommandBar.vue'

const meta: Meta<typeof CommandBar> = {
  component: CommandBar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CommandBar>

export const Primary: Story = {}
