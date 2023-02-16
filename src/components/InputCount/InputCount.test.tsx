import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputCount } from ".";
import FakeImage from "../../assets/images/coffees/american-express.png";

describe("InputCount component", () => {
  it("works correctly the buttons", async () => {
    const mockClickAdd = jest.fn();
    const mockClickRemove = jest.fn();
    const user = userEvent.setup();

    const result = render(
      <InputCount
        onAddOneProductUnity={mockClickAdd}
        onRemoveProductUnity={mockClickRemove}
      />
    );

    await user.click(screen.getByTitle("addOneProductUnity"));
    expect(mockClickAdd).toHaveBeenCalled();

    await user.click(screen.getByTitle("removeProductUnity"));
    expect(mockClickRemove).toHaveBeenCalled();
  });
});
