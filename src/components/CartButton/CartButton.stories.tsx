import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import CartButton, { ICartButton } from "./index";
import cartImage from "../../assets/images/cart.svg";

const cart = ["1", "2"];

export default {
  title: "Components/CartButton",
  component: CartButton,
  args: {
    image: cartImage,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "150px" }}>
          {cart.length !== 0 ? (
            <div style={{ width: "100%" }}>{Story()}</div>
          ) : (
            <h1>Menor</h1>
          )}
        </div>
      );
    },
  ],
} as Meta<ICartButton>;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};
