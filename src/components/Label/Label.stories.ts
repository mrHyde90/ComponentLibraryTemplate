import { type Meta, type StoryObj } from '@storybook/react';
import Label from './index';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'UI/Label',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const PrimaryWoba: Story = {
  args: {
    text: 'Button',
  },
};
