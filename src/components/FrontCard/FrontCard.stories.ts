import { type Meta, type StoryObj } from '@storybook/react';
import { FrontCard } from './index';
import { frontCardArgs } from '../../fixtures/FrontCard';

const meta: Meta<typeof FrontCard> = {
  component: FrontCard,
  title: 'UI/Card',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FrontCard>;

export const PrimaryWoba: Story = {
  args: {
    cardData: frontCardArgs,
  },
};
