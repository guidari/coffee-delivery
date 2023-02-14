import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import Header from "./index";
import cartImage from "../../assets/images/cart.svg";

const cart = ["1", "2"];

export default {
  title: "Components/Header",
  component: Header,

  // args: {
  //   cart: ["1", "2"],
  // },
  argTypes: { cart: [] },

  decorators: [
    (Story) => {
      return (
        <div style={{ width: "150px" }}>
          {cart.length < 1 ? (
            <h1>Menor</h1>
          ) : (
            <div style={{ width: "100%" }}>{Story()}</div>
          )}
        </div>
      );
    },
  ],
} as Meta;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};
