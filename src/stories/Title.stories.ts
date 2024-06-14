import type { Meta, StoryObj } from '@storybook/vue3';

import Title from '../components/Title.vue';

const meta = {
  component: Title,
  argTypes: {
    size: { control: 'radio', options: ['medium', 'large'] },
    color: { control: 'radio', options: ['white', 'black'] }
  }
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTitle: Story = {
    args: {
        text: 'Врач на связи',
        tagType: 'h2',
        color: 'white',
        size: 'medium'
    }
};

export const LargeTitle: Story = {
    args: {
        text: 'Врачи',
        tagType: 'h2',
        color: 'black',
        size: 'large'
    }
};
