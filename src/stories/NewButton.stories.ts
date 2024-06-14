import type { Meta, StoryObj } from '@storybook/vue3';

import NewButton from '../components/NewButton.vue';

const meta = {
  component: NewButton,
  argTypes: {
    shape: { control: 'radio', options: ['square', 'default'] },
    backgroundcolor: { control: 'radio', options: ['white', 'peach', 'blueberry', 'secondary'] },
  },
  args: {
    label: '',
    actionURL: ''
  }
} satisfies Meta<typeof NewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Бесплатная консультация',
        shape: 'default',
        backgroundcolor: 'white',
    }
};

export const Peach: Story = {
    args: {
        label: 'Это бесплатно',
        shape: 'default',
        backgroundcolor: 'peach'
    }
};

export const Secondary: Story = {
    args: {
        label: '',
        shape: 'square',
        backgroundcolor: 'secondary'
    }
};

export const Bluberry: Story = {
    args: {
        label: 'Пройти',
        shape: 'default',
        backgroundcolor: 'blueberry',
    }
};