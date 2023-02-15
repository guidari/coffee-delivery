import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import CartButton, { ICartButton } from "./index";
import cartImage from "../../assets/images/cart.svg";
import { ItemsAmount } from "./style";

export default {
  title: "Components/CartButton",
  component: CartButton,
  args: {
    image: cartImage,
  },
  decorators: [
    (Story) => {
      return <div style={{ width: "100%" }}>{Story()}</div>;
    },
  ],
} as Meta<ICartButton>;

// const Template = (args: IButton) => <Button {...args} />;

export const Default = {};
