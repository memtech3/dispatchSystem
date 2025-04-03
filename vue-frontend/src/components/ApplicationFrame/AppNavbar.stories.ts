import type { Meta, StoryObj } from '@storybook/vue3'

import AppNavbar from './AppNavbar.vue'

const meta: Meta<typeof AppNavbar> = {
  component: AppNavbar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof AppNavbar>

export const Primary: Story = {}
