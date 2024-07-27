import type { Meta, StoryObj } from '@storybook/vue3'

import InputTextArea from './InputTextArea.vue'

const meta: Meta<typeof InputTextArea> = {
  component: InputTextArea,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof InputTextArea>

export const Primary: Story = { args: { id: 'sampleField', label: 'Sample Field' } }
