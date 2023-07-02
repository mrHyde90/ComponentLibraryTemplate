import { type Meta, type StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryWoba: Story = {
  args: {
    primary: true,
    disabled: false,
    text: 'Primary',
  },
};
