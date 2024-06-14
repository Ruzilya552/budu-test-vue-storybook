import type { Meta, StoryObj } from '@storybook/vue3';

import Badge from '../components/Badge.vue';

const meta = {
  component: Badge,
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] }
  },
  args: {
    label: ''
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightBadge: Story = {
    args: {
        label: 'Ответ 1 минута',
        theme: 'light'
    }
};

export const DarkBadge: Story = {
    args: {
        label: 'Оффер до 1500 рублей ',
        theme: 'dark'
    }
};
