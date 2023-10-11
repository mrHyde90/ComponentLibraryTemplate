import { type Meta, type StoryObj } from '@storybook/react';
import { FrontCard } from './index';
import { frontCardArgs } from '../../fixtures/FrontCard';

const meta: Meta<typeof FrontCard> = {
  component: FrontCard,
  title: 'UI/Card',
  argTypes: {
    holderName: { control: 'text' },
    holderNumber: { control: 'text' },
    expirationDate: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof FrontCard>;

export const FirstStory: Story = {
  args: frontCardArgs,
};
