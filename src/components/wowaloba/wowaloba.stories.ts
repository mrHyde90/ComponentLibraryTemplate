import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Wowaloba from "./wowaloba";

const meta: Meta<typeof Wowaloba> = {
  component: Wowaloba,
  title: "UI/wobaloba",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Wowaloba>;


export const Primary: Story = {
    args: {
      text: 'Button',
    },
  };
