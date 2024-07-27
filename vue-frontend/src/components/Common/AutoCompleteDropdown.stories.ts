import type { Meta, StoryObj } from '@storybook/vue3'

import AutoCompleteDropdown from '@/components/Common/AutoCompleteDropdown.vue'

const meta: Meta<typeof AutoCompleteDropdown> = {
  component: AutoCompleteDropdown,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof AutoCompleteDropdown>

export const Primary: Story = {}
