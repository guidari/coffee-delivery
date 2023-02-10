import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import Button, { IButton } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    //👇 Now all Button stories will be primary.
    title: "Button",
  },
} as Meta;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};
