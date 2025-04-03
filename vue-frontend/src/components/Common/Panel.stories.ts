import type { Meta, StoryObj } from '@storybook/vue3'

import Panel from '@/components/Common/Panel.vue'

const meta: Meta<typeof Panel> = {
  component: Panel,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Panel>

export const Primary: Story = { args: {} }
