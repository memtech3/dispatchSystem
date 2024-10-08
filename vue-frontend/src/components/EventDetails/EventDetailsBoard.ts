import type { Meta, StoryObj } from '@storybook/vue3'

import EventForm from '@/components/EventDetails/EventDetailsBoard.vue'

const meta: Meta<typeof EventForm> = {
  component: EventForm,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EventForm>

export const Primary: Story = {}
