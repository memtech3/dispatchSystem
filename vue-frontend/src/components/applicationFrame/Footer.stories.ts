import type { Meta, StoryObj } from '@storybook/vue3'

import Footer from './Footer.vue'

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Footer>

export const Primary: Story = {}
