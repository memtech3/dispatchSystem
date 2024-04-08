import type { Meta, StoryObj } from '@storybook/vue3'

import CallsCardBoard from './CallCardBoard.vue'

const meta: Meta<typeof CallsCardBoard> = {
  component: CallsCardBoard,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CallsCardBoard>

export const Primary: Story = {}
