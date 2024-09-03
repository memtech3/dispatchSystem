import type { Meta, StoryObj } from '@storybook/vue3'

import EventCard from './EventCard.vue'

const meta: Meta<typeof EventCard> = {
  component: EventCard,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EventCard>

export const Primary: Story = {
  args: {
    id: 'IFD105',
    priority: 1,
    priorityClr: 'red',
    typeCode: 'F1',
    typeDescription: 'Structure Fire',
    typeIcon: 'string',
    location: 'string',
    assignedResources: 'string'
  }
}
