import CallsListItem from './CallsListItem.vue'

export default {
  component: CallsListItem,
  title: 'Calls List Item',
  tags: ['autodocs']
}

export const Default = {
  args: {
    callID: '1',
    callPriority: 1,
    callPriorityClr: 'priorityColor-green',
    callTypeCode: '2319',
    callTypeDescription: 'Human Contamination',
    callTypeIcon: 'bi-virus',
    callLocation: 'Scare Floor Sector 7G',
    callAssignedResources: 'P135, PS34, H43, H44',
    callCreatedTime: new Date('2001-10-02T09:54:01.999Z')
  }
}
