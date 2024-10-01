import type { Meta, StoryObj } from '@storybook/vue3'

import EditableTable from '@/components/Common/EditableTable.vue'

const meta: Meta<typeof EditableTable> = {
  component: EditableTable,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EditableTable>

export const Primary: Story = {
  args: {
    id: 'sampleField',
    columns: [
      { key: 'Name', label: 'Name' },
      { key: 'Position', label: 'Position' }
    ],
    rows: [
      { id: 1, Name: 'Option 1', Position: 1 },
      { id: 2, Name: 'Option 2', Position: 2 }
    ]
  }
}
