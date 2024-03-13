import type { Meta, StoryObj } from '@storybook/vue3'

import Navbar from './Navbar.vue'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Primary: Story = {}
