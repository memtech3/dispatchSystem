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
    callID: 'IFD105',
    callPriority: 1,
    callPriorityClr: 'red',
    callTypeCode: 'F1',
    callTypeDescription: 'Structure Fire',
    callTypeIcon: 'string',
    callLocation: 'string',
    callAssignedResources: 'string'
  }
}
