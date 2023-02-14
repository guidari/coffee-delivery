import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import InputAdress from "./index";
import cartImage from "../../assets/images/cart.svg";

export default {
  title: "Components/InputAdress",
  component: InputAdress,

  // decorators: [
  //   (Story) => {
  //     return <div style={{ width: "150px" }}>{Story()}</div>;
  //   },
  // ],
  decorators: [
    (Story) => {
      return <div style={{ width: "150px" }}>{Story()}</div>;
    },
  ],
} as Meta;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};
