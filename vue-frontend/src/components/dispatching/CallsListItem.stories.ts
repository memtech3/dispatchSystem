import CallsListItem from './CallsListItem.vue';

export default {
    component: CallsListItem,
    title: 'Calls List Item',
    tags: ['autodocs']
};

export const Default = {
    args: {
        callID: '1',
        callPriority: 1,
        callTypeCode: '10-15',
        callTypeDescription: 'Blegh',
        callLocation: 'Hmmmmm',
        callAssignedResources: 'ha none'
      },
};