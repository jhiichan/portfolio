import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Footer, FooterProps } from '.';

const meta = {
  title: 'Components/Molecules/Footer',
  component: Footer,
} satisfies Meta<FooterProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    name: 'Name',
    onGitHubIconClick: fn(),
    onLinkedInIconClick: fn(),
  },
};
