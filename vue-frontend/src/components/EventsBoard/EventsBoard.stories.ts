import type { Meta, StoryObj } from '@storybook/vue3'

import EventsBoard from './EventsBoard.vue'

const meta: Meta<typeof EventsBoard> = {
  component: EventsBoard,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EventsBoard>

export const Primary: Story = {}
