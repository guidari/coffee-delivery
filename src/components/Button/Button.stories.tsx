import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import Button, { IButton } from "./index";
import PurpleLocation from "../../assets/images/purpleLocation.svg";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    title: "Button",
    image: PurpleLocation,
  },
  decorators: [
    (Story) => {
      return <div style={{ width: "150px" }}>{Story()}</div>;
    },
  ],
} as Meta<IButton>;

export const Default = {};
