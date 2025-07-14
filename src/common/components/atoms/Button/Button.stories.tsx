import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Button, { ButtonProps } from '.';

const meta = {
  title: 'Common Components/Atoms/Buttons',
  component: Button,
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextButton: Story = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['text', 'contained', 'outlined'],
    },
  },
  args: {
    variant: 'contained',
    children: 'Button',
  },
};
