import type { Meta, StoryObj } from '@storybook/vue3'

import UnitsTable from './UnitsTable.vue'

const meta: Meta<typeof UnitsTable> = {
  component: UnitsTable,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof UnitsTable>

export const Primary: Story = {}
