import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from ".";

describe("DefaultLayout component", () => {
  it("renders correctly", () => {
    const { debug } = render(
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    );
    debug();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
