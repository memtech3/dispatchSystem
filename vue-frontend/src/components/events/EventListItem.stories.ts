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
