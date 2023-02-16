import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeCard from ".";
import CoffeeImage from "../../../../assets/images/coffees/tradicional-express.png";

const coffeeArgs = {
  id: 1,
  name: "Expresso Americano",
  description: "Expresso diluído, menos intenso que o tradicional",
  price: 10.9,
  tags: ["Tradicional"],
  image: CoffeeImage,
  isAvaliable: true,
};

describe("CoffeeCard component", () => {
  it("renders correctly", () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    expect(screen.getByTestId("removeProductUnity")).toBeInTheDocument();
  });

  it("should increment the counter", async () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    const user = userEvent.setup();

    const counter = screen.getByTestId("counter");
    const addItem = screen.getByTestId("addOneProductUnity");
    const removeItem = screen.getByTestId("removeProductUnity");

    await user.click(addItem);
    expect(counter).toHaveValue(2);

    await user.click(removeItem);
    expect(counter).toHaveValue(1);
  });
});
