import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonProps } from '.';

const meta = {
  title: 'Components/Atoms/Buttons',
  component: Button,
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
