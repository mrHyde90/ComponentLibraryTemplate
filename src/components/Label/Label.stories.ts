import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./index";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "UI/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const PrimaryLabel: Story = (args) => (
  <Label data-testId="InputField-id" {...args} />
);
PrimaryLabel.args = {
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <Label data-testId="InputField-id" {...args} />
);
Secondary.args = {
  text: "Secondary",
};
