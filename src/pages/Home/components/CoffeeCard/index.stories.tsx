import { Meta, StoryObj, ComponentMeta } from "@storybook/react";
import CoffeeCard, { ICoffee } from "./index";
import CoffeeImage from "../../../../assets/images/coffees/tradicional-express.png";

export default {
  title: "Home/Components/CoffeeCard",
  component: CoffeeCard,
  args: {
    coffee: {
      id: 1,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 10.9,
      tags: ["Tradicional"],
      image: CoffeeImage,
      isAvaliable: true,
    },
  },
  decorators: [
    (Story) => {
      return <div style={{ width: "270px", marginTop: "20px" }}>{Story()}</div>;
    },
  ],
} as Meta<ICoffee>;

export const Default = {};
