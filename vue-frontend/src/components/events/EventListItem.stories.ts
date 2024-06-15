import type { Meta, StoryObj } from '@storybook/vue3'

import EventListItem from './EventListItem.vue'

const meta: Meta<typeof EventListItem> = {
  component: EventListItem,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EventListItem>

export const Primary: Story = {
  args: {
    eventID: 'IFD105',
    eventPriority: 1,
    eventPriorityClr: 'red',
    eventTypeCode: 'F1',
    eventTypeDescription: 'Structure Fire',
    eventTypeIcon: 'string',
    eventLocation: 'string',
    eventAssignedResources: 'string'
  }
}
