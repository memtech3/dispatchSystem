import type { Meta, StoryObj } from '@storybook/vue3'

import InputText from '@/components/Common/InputText.vue'

const meta: Meta<typeof InputText> = {
  component: InputText,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof InputText>

export const Primary: Story = { args: { id: 'sampleField', label: 'Sample Field' } }
