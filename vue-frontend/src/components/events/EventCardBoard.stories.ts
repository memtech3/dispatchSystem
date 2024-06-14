import type { Meta, StoryObj } from '@storybook/vue3'

import EventCardBoard from './EventCardBoard.vue'

const meta: Meta<typeof EventCardBoard> = {
  component: EventCardBoard,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EventCardBoard>

export const Primary: Story = {}
