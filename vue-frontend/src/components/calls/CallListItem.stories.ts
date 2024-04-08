import type { Meta, StoryObj } from '@storybook/vue3'

import CallListItem from './CallListItem.vue'

const meta: Meta<typeof CallListItem> = {
  component: CallListItem,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CallListItem>

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
