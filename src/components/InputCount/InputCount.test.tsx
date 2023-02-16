import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputCount } from ".";

describe("InputCount component", () => {
  it("works correctly the buttons", async () => {
    const mockClickAdd = jest.fn();
    const mockClickRemove = jest.fn();
    const user = userEvent.setup();

    render(
      <InputCount
        onAddOneProductUnity={mockClickAdd}
        onRemoveProductUnity={mockClickRemove}
      />
    );

    await user.click(screen.getByTestId("addOneProductUnity"));
    expect(mockClickAdd).toHaveBeenCalled();

    await user.click(screen.getByTestId("removeProductUnity"));
    expect(mockClickRemove).toHaveBeenCalled();
  });
});
